export interface CartProductDetails {
// subcategory: CartSubcategory[];
_id: string;
title: string;
quantity: number;
imageCover: string;
// category: CartCategory;
// brand: CartBrand;
ratingsAverage: number;
id: string;
}

export interface CartItem { 
count: number;
product: CartProductDetails;
_id: string;
price: number;
}
export interface CartData {
_id: string;
cartowner: string;
products: CartItem[];
createdAt: string;
updatedAt: string;
__v: number;
totalCartPrice: number;
}

export interface CartResponse {
    status: string;
    numOfCartItems: number;
    cartId: string;
    data: CartData;
}