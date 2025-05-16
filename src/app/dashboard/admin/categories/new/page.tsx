import CategoryDetails from "@/components/dashboard/forms/category-details";
import React from "react";

export default function AdminNewCategoryPage() {
  const CLOUDINARY_CLOUD_KEY = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  if (!CLOUDINARY_CLOUD_KEY) return null;

  return (
    <div className="w-full">
      <CategoryDetails Cloudinary_key={CLOUDINARY_CLOUD_KEY} />
    </div>
  );
}
