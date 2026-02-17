'use server';

import axios from "axios";
import { AxiosRequestConfig } from "axios";
import { CategoriesResponse } from "../types/categories.type";

export async function getAllCategories(): Promise<CategoriesResponse> {
    try {
        const options: AxiosRequestConfig = {
            url: `https://ecommerce.routemisr.com/api/v1/subcategories`,
            method: "GET"
        };

        const { data } = await axios.request(options);
        return data;
    } catch (error) {
        throw error;
    }
}


export async function AllCategories(): Promise<CategoriesResponse> {
    try {
        const options: AxiosRequestConfig = {
            url: `https://ecommerce.routemisr.com/api/v1/categories`,
            method: "GET"
        };

        const { data } = await axios.request(options);
        return data;
    } catch (error) {
        throw error;
    }
}

export async function getProductsByCategory(categoryId: string) {
    try {
        const options: AxiosRequestConfig = {
            url: `https://ecommerce.routemisr.com/api/v1/products?category[in]=${categoryId}`,
            method: "GET"
        };

        const { data } = await axios.request(options);
        return data;
    } catch (error) {
        throw error;
    }
}


