 import ProductDetails from "../components/productDetails"
import { getProductById } from "../server/products.actions"



export default async  function ProductDetailsScreen({productId}:{productId:string}) {
    const response=await getProductById({id:productId})
    return <>
        <ProductDetails product={response.data} />
        
    </>
}
 