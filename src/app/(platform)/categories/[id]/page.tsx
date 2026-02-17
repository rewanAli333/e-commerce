import Category from "@/features/categories/components/category";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function CategoryPage({ params }: Props) {
  const { id } = await params;

  return <Category categoryId={id} />;
}



