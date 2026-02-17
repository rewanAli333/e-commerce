import Slider from "../components/slider";
import PromoBanner from "../components/promoBanner";
import OurCategories from "../components/ourCategories";
import FeatueredProducts from "@/features/products/components/featueredProducts";

export default function HomeScreen() {
    return <>
        <Slider />
        <PromoBanner />
        <OurCategories />
        <FeatueredProducts />
    </>
}