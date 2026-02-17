'use server';
import axios, { AxiosRequestConfig } from 'axios';
import { cookies } from 'next/headers';
import { shippingAddressValues } from '../schema/payment.schema';



export async function CreateCashOrder({ cartId, shippingAddress }: { cartId: string, shippingAddress: shippingAddressValues }) {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("token")?.value || null;

    if (!token) {
        throw new Error("Authentication required");
    }
    try {
        const options: AxiosRequestConfig = {
            url: `https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
            method: "POST",
            headers: {
                token
            },
            data: {
                shippingAddress
            }
        }
        const { data } = await axios.request(options);
        return data
    } catch (error) {
        throw error;
    }
} 



export async function CreateOnlineOrder({ cartId, shippingAddress, url }: { cartId: string, shippingAddress: shippingAddressValues , url:string}) {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("token")?.value || null;

    if (!token) {
        throw new Error("Authentication required");
    }
    try {
        const options: AxiosRequestConfig = {
            url:`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}`,
            method: "POST",
            headers: {
                token
            },
            data: {
                shippingAddress
            }
        }
        const { data } = await axios.request(options);
        return data
    } catch (error) {
        throw error;
    }
} 