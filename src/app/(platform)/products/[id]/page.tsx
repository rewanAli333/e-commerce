import ProductDetailsScreen from "@/features/products/screens/product-details.screen";
type ProductDetailsProps = {
  params: { id: string }
}
export default async function ProductDetails({ params }:ProductDetailsProps) {
  const { id } = await params;
  return <>
    <ProductDetailsScreen productId={id} />

  </>
} 