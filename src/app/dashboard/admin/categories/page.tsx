import CategoryDetails from "@/components/dashboard/forms/category-details";
import DataTable from "@/components/ui/data-table";
import { getAllCategories } from "@/queries/category";
import { Plus } from "lucide-react";
import { columns } from "./columns";

export default async function AdminCategoriesPage() {
  const categories = await getAllCategories();

  if (!categories) return null;

  const CLOUDINARY_CLOUD_KEY = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  if (!CLOUDINARY_CLOUD_KEY) return null;

  return (
    <DataTable
      columns={columns}
      heading="Categories"
      subheading="List of all categories"
      data={categories || []}
      filterValue="name"
      newTabLink="/dashboard/admin/categories/new"
      searchPlaceholder="Search categories..."
      actionButtonText={
        <>
          <Plus size={15} />
          Create Category
        </>
      }
      modalChildren={<CategoryDetails Cloudinary_key={CLOUDINARY_CLOUD_KEY} />}
    />
  );
}
