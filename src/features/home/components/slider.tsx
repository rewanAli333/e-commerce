'use client'

import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import mackup from "../../../assets/images/mackup.jpeg";
import electronic from "../../../assets/images/electronic.jpeg";
import defacto from "../../../assets/images/defacto.jpeg";
import samsung from "../../../assets/images/samsung.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


export default function slider() {
    return <>
        <section className='relative'>
            <Swiper modules={[Navigation, Pagination, Autoplay]} navigation={{
                prevEl: '.custom-prev',
                nextEl:'.custom-next'
            }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
            >
                <SwiperSlide>
                    <div style={{
                        backgroundImage: `url(${mackup.src})`,
                        backgroundSize: "cover",
                        backgroundPosition:"center"
                    }}>
                        <div className="overlay py-20 text-white p-4 w-full h-full bg-linear-to-r from-amber-100/90 to-amber-50/50">
                            <div className="container h-full content-center">
                                <h2 className="text-white text-3xl font-bold mb-4 max-w-96">
                                    Fresh Proudects Delivered to your Door
                                </h2>
                                <p>Get 20% off your first order</p>
                                <div className="mt-4 *:ms-3">
                                    <Link href={'/products'} className="btn bg-white border-2 border-white/50 text-green-500">Shop Now</Link>
                                    <Link href={'deals'} className="btn bg-white border-2 border-white/50 text-green-500">View Deals</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    </SwiperSlide>
                <SwiperSlide>
                    <div style={{
                        backgroundImage: `url(${electronic.src})`,
                        backgroundSize: "cover",
                        backgroundPosition:"center"
                    }}>
                        <div className="overlay py-20 text-white p-4 w-full h-full bg-linear-to-r from-gray-200/90 to-gray-100/50">
                            <div className="container h-full content-center">
                                <h2 className="text-white text-3xl font-bold mb-4 max-w-96">
                                    Fresh Proudects Delivered to your Door
                                </h2>
                                <p>Get 20% off your first order</p>
                                <div className="mt-4 *:ms-3">
                                    <Link href={'/products'} className="btn bg-white border-2 border-white/50 text-green-500">Shop Now</Link>
                                    <Link href={'deals'} className="btn bg-white border-2 border-white/50 text-green-500">View Deals</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{
                        backgroundImage: `url(${defacto.src})`,
                        backgroundSize: "cover",
                        backgroundPosition:"center"
                    }}>
                        <div className="overlay py-20 text-white p-4 w-full h-full bg-linear-to-r from-black/90 to-black/30">
                            <div className="container h-full content-center">
                                <h2 className="text-white text-3xl font-bold mb-4 max-w-96">
                                    Fresh Proudects Delivered to your Door
                                </h2>
                                <p>Get 20% off your first order</p>
                                <div className="mt-4 *:ms-3">
                                    <Link href={'/products'} className="btn bg-white border-2 border-white/50 text-green-500">Shop Now</Link>
                                    <Link href={'deals'} className="btn bg-white border-2 border-white/50 text-green-500">View Deals</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{
                        backgroundImage: `url(${samsung.src})`,
                        backgroundSize: "cover",
                        backgroundPosition:"center"
                    }}>
                        <div className="overlay py-20 text-white p-4 w-full h-full bg-linear-to-r from-blue-100/50 to-blue-50">
                            <div className="container h-full content-center">
                                <h2 className="text-white text-3xl font-bold mb-4 max-w-96">
                                    Fresh Proudects Delivered to your Door
                                </h2>
                                <p>Get 20% off your first order</p>
                                <div className="mt-4 *:ms-3">
                                    <Link href={'/products'} className="btn bg-white border-2 border-white/50 text-green-500">Shop Now</Link>
                                    <Link href={'deals'} className="btn bg-white border-2 border-white/50 text-green-500">View Deals</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
            </Swiper>

            <button className='custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor pointer bg-white/90 hover:bg-gray-400 p-3 rounded-full'>
                <FontAwesomeIcon icon={faChevronLeft} className='text-lg' />
            </button>
            <button className='custom-next absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor pointer bg-white/90 hover:bg-gray-400 p-3 rounded-full'>
                <FontAwesomeIcon icon={faChevronRight} className='text-lg' />
            </button>
        </section>
    </>
}
