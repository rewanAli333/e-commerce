'use server'

import { signupFormValues, signupSchema } from "../schema/signup.schema";
import axios from "axios";

export default async function signupAction(values: signupFormValues) {

  const validationResult = signupSchema.safeParse(values);

  if (!validationResult.success) {
    const errors: Record<string, string> = {};
    validationResult.error.issues.forEach((issue) => {
      const field = issue.path[0] as string;
      errors[field] = issue.message;
    });

    return { success: false, message: "validation errors", errors };
  }

  const payload = {
    name: values.name,
    email: values.email,
    password: values.password,
    rePassword: values.resetPassword,
    phone: values.phone,
  };

  try {
    const { data } = await axios.post(
      "https://ecommerce.routemisr.com/api/v1/auth/signup",
      payload
    );

    if (data.message && data.message.toLowerCase().includes("success")) {
      return { success: true, message: "Account created successfully", data };
    }

    if (data.message && data.message.toLowerCase().includes("already exists")) {
      return { success: false, message: "Email already registered" };
    }

    return { success: false, message: data.message || "signup failed" };

  } catch (error: any) {
    console.log("API ERROR 👉", error.response?.data || error.message);
    return { success: false, message: error.response?.data?.message || "signup failed" };
  }
}








// export default async function signupAction(values: signupFormValues) {
//     const validationResult = signupSchema.safeParse(values);
//     if (!validationResult.success) {
//         const errors: Record<string, string> = {};
//         validationResult.error.issues.forEach(issue => {
//             const field = issue.path[0] as string;
//             if (!errors[field]) errors[field] = issue.message;
//         });
//         return { success: false, message: "validation errors", errors };
//     }

//     const { terms, resetPassword, ...payload } = values;

//     try {
//         const { data } = await axios.post(
//             "https://ecommerce.routemisr.com/api/v1/auth/signup",
//             payload
//         );
//         console.log("API response:", data);

//         if (data.status === 'success' || data.message === 'success') {
//             return { success: true, message: 'account created successfully', data };
//         }

//         return { success: false, message: data.message || 'signup failed', details: data };
//     } catch (error: any) {
//         console.error("Signup error:", error.response?.data || error.message);
//         return { success: false, message: error.response?.data?.message || "signup failed", details: error.response?.data || null };
//     }
// }










// export default async function signupAction(values: signupFormValues) {
//   const validationResult = signupSchema.safeParse(values);
//   if (!validationResult.success) {
//     const errors: Record<string, string> = {};
//     validationResult.error.issues.forEach(issue => {
//       const field = issue.path[0] as string;
//       if (!errors[field]) errors[field] = issue.message;
//     });
//     return { success: false, message: "validation errors", errors };
//   }

//   const { terms, resetPassword, ...payload } = values;

//   try {
//     const { data } = await axios.post(
//       "https://ecommerce.routemisr.com/api/v1/auth/signup",
//       payload
//     );
//     console.log("API response:", data);

//     // أي رسالة فيها كلمة "success" أو "created" تعتبر ناجحة
//     if (data.status === 'success' || data.status === 'ok') {
//   return { success: true, message: data.message || "Account created successfully", data };
// }

//   } catch (error: any) {
//     console.error("Signup error:", error.response?.data || error.message);
//     return {
//       success: false,
//       message: error.response?.data?.message || "signup failed",
//       details: error.response?.data || null
//     };
//   }
// }
