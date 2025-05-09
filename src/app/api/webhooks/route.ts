import { User } from "@/generated/prisma";
import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextRequest } from "next/server";
import { db } from "@/lib/db";
import { clerkClient } from "@clerk/nextjs/server";
export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req);

    // When a user is created or updated, we want to update the user in our database
    if (evt.type === "user.created" || evt.type === "user.updated") {
      console.log("userId:", evt.data.id);
      const data = JSON.stringify(evt.data, null, 2);
      console.log("user data: ", data);
      const user: Partial<User> = {
        id: evt.data.id,
        name: `${evt.data.first_name} ${evt.data.last_name}`,
        email: evt.data.email_addresses[0].email_address,
        picture: evt.data.image_url,
      };
      if (!user) return;

      const dbUser = await db.user.upsert({
        where: {
          email: user.email,
        },
        update: user,
        create: {
          id: user.id!,
          name: user.name!,
          email: user.email!,
          picture: user.picture!,
          role: user.role || "USER",
        },
      });

      const client = await clerkClient(); // Aufruf und await!
      await client.users.updateUserMetadata(user.id!, {
        privateMetadata: {
          role: dbUser.role || "USER",
        },
      });
    }

    // When a user is deleted, we want to delete the user from our database
    if (evt.type === "user.deleted") {
      console.log("userId:", evt.data.id);
      await db.user.delete({
        where: {
          id: evt.data.id,
        },
      });
    }

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }
}
