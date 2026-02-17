// import { signupSchema } from './signup.schema';
import { z } from "zod";


export const signupSchema = z.object({
    name: z.string()
        .nonempty('name is requird')
        .min(3, 'name must be at least 3 characters long')
        .max(25, 'name must be at most characters long '),
    email: z.string().nonempty('email is required').pipe(z.email('invalid email address')),
    password: z.string().min(8, "password must be at least 8 characters long")
        .nonempty('password is requird')
        .regex(/[A-Z]/, "Password must contain at least one uppercase latter")
        .regex(/[a-z]/, "Password must contain at least one lowercase latter")
        .regex(/[0-9]/, "Password must contain at least one number")
        .regex(/[!@#$%^&(),.?"{}<>|]/, "Password must contain at least one special character"),
    resetPassword: z.string().nonempty('repassword is requird'),
    phone: z.string().nonempty('phone is requird').regex(/^(\+2)?01[0125][0-9]{8}$/, 'only Egyption phone number are allwoed'),
    terms: z.boolean().refine((value) => value === true, {
        error: "you must accept the terms and conditions",
    })
}).refine((data)=> data.password === data.resetPassword, {
    error:"password and confirm password must match",
})

export type signupFormValues=z.infer<typeof signupSchema>