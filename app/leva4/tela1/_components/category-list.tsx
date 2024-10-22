import { mockCategories } from "@/app/_helpers/mocks";
import CategoryItem from "./category-item";

const CategoryList = async () => {
  const categories = mockCategories; // await db.category.findMany({});

  return (
    <div className="grid grid-cols-2 gap-3">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
