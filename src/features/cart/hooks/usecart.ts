"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getLoggedUserCart, addProductToCart, removeProductFromCart, updateProduct as updateQuantityApi } from "../../cart/server/cart.action";
import { toast } from "react-toastify";

export const CART_QUERY_KEY = ["cart"];

function transformCart(data: any) {
return {
    items: data?.data?.products ?? [],
    numOfCartItems: data?.numOfCartItems ?? 0,
    totalCartPrice: data?.data?.totalCartPrice ?? 0,
    cartId: data?.cartId ?? "",
    shipping: (data?.data?.totalCartPrice ?? 0) > 500 ? 0 : 100,
};
}

export function useCart() {
const queryClient = useQueryClient();

const cartQuery = useQuery({
    queryKey: CART_QUERY_KEY,
    queryFn: getLoggedUserCart, 
    select: transformCart,
});

const addMutation = useMutation({
    mutationFn: addProductToCart, 
    onSuccess: (data) => {
    toast.success("Product added to cart successfully");
    queryClient.setQueryData(CART_QUERY_KEY, transformCart(data));
    },
    onError: (error) => {
    toast.error("Failed to add product to cart");
    console.error(error);
    },
});

const removeMutation = useMutation({
    mutationFn: removeProductFromCart,
    onSuccess: (data) => {
    toast.success("Product removed from cart successfully");
    queryClient.setQueryData(CART_QUERY_KEY, transformCart(data));
    },
    onError: (error) => {
    toast.error("Failed to remove product from cart");
    console.error(error);
    },
});

const updateQuantityMutation = useMutation({
    mutationFn: ({ productId, count }: { productId: string; count: number }) =>
    updateQuantityApi(productId, count),
    onSuccess: (data) => {
    toast.success("Product quantity updated successfully");
    queryClient.setQueryData(CART_QUERY_KEY, transformCart(data));
    },
    onError: (error) => {
    toast.error("Failed to update quantity");
    console.error(error);
    },
});

return {
    ...cartQuery,
    items: cartQuery.data?.items ?? [],
    numOfCartItems: cartQuery.data?.numOfCartItems ?? 0,
    totalCartPrice: cartQuery.data?.totalCartPrice ?? 0,
    cartId: cartQuery.data?.cartId ?? "",
    shipping: cartQuery.data?.shipping ?? 100,
    addProduct: addMutation.mutateAsync,
    removeProduct: removeMutation.mutateAsync,
    updateQuantity: updateQuantityMutation.mutateAsync,
    isAdding: addMutation.isPending,
    isRemoving: removeMutation.isPending,
    isUpdating: updateQuantityMutation.isPending,
};
}
