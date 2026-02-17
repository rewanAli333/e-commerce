'use client'

import { faCheck, faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import swal from "sweetalert2";


import { CartItem as CartItemType } from "../types/cart.type";
import { removeProductFromCart, updateProduct } from "../server/cart.action";
import { toast } from "react-toastify";
import { removeProduct, setCartInfo } from "../store/cart.slice";
import {useAppDispatch} from "@/store/store"


type Props = {
  info: CartItemType;
};

export default function CartItem({ info }: Props) {
  const { _id, count, price, product } = info;
  const { category, imageCover, quantity, title, _id: productId } = product;

  const disPatch = useAppDispatch();

  const handelRemove = async () => {
    const result = await swal.fire({
      html: `<div class="text-center py-2">
      <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
      <svg 
  xmlns="http://www.w3.org/2000/svg"
  fill="none" 
  viewBox="0 0 24 24" 
  stroke-width="1.5" 
  stroke="currentColor" 
  class="w-8 h-8 text-red-500"
>
  <path 
    stroke-linecap="round" 
    stroke-linejoin="round" 
    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 
       1.022.166m-1.022-.165L18.16 19.673A2.25 2.25 0 0115.916 
       21H8.084a2.25 2.25 0 01-2.244-1.327L4.772 
       5.79m14.456 0a48.108 48.108 0 
       00-3.478-.397m-12 .562c.34-.059.68-.114 
       1.022-.165m0 0a48.11 48.11 0 
       013.478-.397m7.5 0V4.875c0-1.036-.84-1.875-1.875-1.875h-3.75c-1.036 
       0-1.875.84-1.875 1.875V5.25m7.5 0h-7.5" 
  />
</svg>


      </div>
      <h3 class="text-xl font-bold text-gray-900 mb-2">Remove Item?</h3>
      <p class="text-gray-500 text-sm leading-relaxed">
      Remove <span class="font-semibold text-gray-700">${title.slice(0, 40)}${title.length > 40 ? "..." : "..."}</span> from cart
      </p>
            </div>`,
      
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: "Remove",
      cancelButtonText: "Cancel",
      buttonsStyling: false,
      customClass: {
        confirmButton: "bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl transition-all",
        cancelButton: "bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all",
        actions: "px-6 pb-6 pt-0 gap-3 flex-row-reverse",
        popup: "rounded-2xl shadow-2xl border-0 p-0",
        htmlContainer: "p-6 m-0",
      },
    });

    if (result.isConfirmed) {
      disPatch(removeProduct({ id: _id }));
      await removeProductFromCart(productId);
      toast.success("Item removed");
    }
  };

  const handleUpdate = async (newCount: number) => {
    if (newCount < 1) return; 
    try {
      const response = await updateProduct(productId, newCount);
      disPatch(setCartInfo(response));
    } catch (error) {
      throw error;
    }
    
  }

  return <>
    <div className={`relative bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-200`}>
      <div className="container">
      <div className="p-4 sm-5">
        <div className="flex gap-4 sm:gap-6">
          <Link href={`/products/productDetails/${productId}`} className="relative shrink-0 group">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl bg-linear-to-br from-gray-50 via-white to-gray-100 p-3 border border-gray-500">
              <Image
                src={imageCover}
                  alt={title}
                  width={100}
                  height={100}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-green-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-xl">
              <FontAwesomeIcon icon={faCheck} className="text-[8px]" />
              In Stock
            </div>
          </Link>

          <div className="flex-1 min-w-0 flex flex-col">
            <div className="mb-3">
              <Link href={`/products/productDetails/${productId}`} className="group/title">
                <h3 className="font-semibold text-gray-900 group-hover/title:text-green-600 transition-colors leading-relaxed">
                  {title}
                </h3>
              </Link>
              <div className="flex items-center gap-2 mt-2">
                <span className="inline-block px-2 5 py-1 bg-linear-to-r from-gray-50 to-emerald-50 text-green-700">
                  {category.name}
                </span>
                <span className="text-xs text-gray-400">...</span>
                <span className="text-sm text-gray-500">
                    SKU:{_id.slice(-6).toUpperCase()}
                </span>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-baseline gap-2">
                <span className="text-green-600 font-bold text-lg">
                  {price}EGP
                </span>
                <span className="text-xs text-gray-400">per unit</span>
              </div>
            </div>

            <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center">
                <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-200">
                  <button className="h-8 w-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-gray-500 hover:bg-gray-700 hover:text-white"
                    aria-label="Decrease quantity" disabled={count<= 1} onClick={() => {
                      handleUpdate(count-1)
                    }}>
                    <FontAwesomeIcon icon={faMinus} className="text-xs"/>
                  </button>
                  <span className="w-12 text-center font-bold text-gray-900">
                    {count}
                  </span>
                  <button className="h-8 w-8 rounded-lg bg-green-600 shadow-sm shadow-greed-600/30 flex items-center justify-center  hover:bg-white hover:text-green-600"
                      aria-label="Increase quantity" disabled={count>= quantity} onClick={() => {
                      handleUpdate(count+1)
                    }}>
                    <FontAwesomeIcon icon={faPlus} className="text-xs"/>
                    </button>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-xs text-gray-400 mb-0 5">Total</p>
                  <p className="text-xl font-bold text-gray-900">
                    {price*count} {""}
                    <span className="text-sm font-medium text-gray-400">
                      EGP
                    </span>
                  </p>
                </div>

                <button className="h-10 w-10 rounded-xl border border-red-200 bg-red-50 text-red-500 hover:bg-500 hover:text-50"
                  title="Remove item"
                  aria-label="Remove from cart" onClick={handelRemove}>
                  <FontAwesomeIcon icon={faTrash} className="text-sm"/>
                  </button>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
    </div>
  </>
}
