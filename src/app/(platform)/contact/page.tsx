'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export default function ContactUs() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>();

  const onSubmit: SubmitHandler<ContactFormValues> = (data) => {
    console.log(data);
    toast.success("Message sent successfully!");
    reset();
  };

  return (
    <div className="bg-linear-to-b from-gray-50 to-white min-h-screen py-16">
      <div className="container mx-auto px-4">

        <div className="flex items-center justify-center gap-4 mb-12">
          <span className="h-10 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full"></span>
          <h1 className="text-4xl font-bold text-gray-800">
            Contact <span className="text-emerald-600">Us</span>
          </h1>
        </div>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
          We'd love to hear from you! Reach out for support, inquiries, or just to say hello.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center text-xl">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Phone</h3>
                <p className="text-gray-500">+20 123 456 7890</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center text-xl">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Email</h3>
                <p className="text-gray-500">support@yourshop.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center text-xl">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Address</h3>
                <p className="text-gray-500">123 E-commerce St, Cairo, Egypt</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl shadow-sm p-8 space-y-6 border border-gray-100">
            
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input 
                type="text" 
                {...register("name", { required: true })}
                className="w-full border border-gray-200 rounded-xl p-3 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input 
                type="email" 
                {...register("email", { required: true })}
                className="w-full border border-gray-200 rounded-xl p-3 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">Email is required</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea 
                {...register("message", { required: true })}
                className="w-full border border-gray-200 rounded-xl p-3 h-32 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition"
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">Message is required</p>}
            </div>

            <button type="submit" className="w-full bg-linear-to-r from-green-600 to-green-700 text-white py-4 rounded-xl font-bold hover:opacity-90 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
