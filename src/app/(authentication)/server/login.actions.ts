'use server';

import { LoginFormValues, loginSchema } from "../schema/login.schema";
import axios, { AxiosError, AxiosRequestConfig } from "axios";

export default async function loginAction(values: LoginFormValues) {
    const validationResult = loginSchema.safeParse(values);


    if (!validationResult.success) {
        const errors:Record<string, string> = {};
        
        validationResult.error.issues.forEach((issue) => {
            const key = issue.path[0] as string;
            const message = issue.message;

            if (!errors[key]) {
                errors[key] = message;
            }
        })

        return {
            success: false,
            message: 'validation error',
            errors
        }
    }

    try {
        const {rememberMe, ...reqestData}=values

        const options: AxiosRequestConfig = {
            url: "https://ecommerce.routemisr.com/api/v1/auth/signin",
            method: "POST",
            data: reqestData
        }

        const { data } = await axios.request(options);

        if (data.message === 'success') {
            return {
                success: true,
                message: "Welcom Back",
                data
            }
        }
        return {
            success: false,
            messsage: "login failed",
        };

    } catch (error:any) {
        if (error instanceof AxiosError) {
            const errorMessage = error.response?.data.message;
            if (errorMessage === "Incorrect email or password") {
                return {
                    success: false,
                    message: "wrong credentials",
                    errors: {
                        password:"Incorrect email or password"
                    }
                }
            }
        }
  return {
    success: false,
    message: error.response?.data?.message || "login failed",
  };
}
}