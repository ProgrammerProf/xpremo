"use client";
import Card from "@/app/component/card";
import Link from "next/link";
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Cards ({ data, slides, title }) {

    return (

        <div>

            { 
                title && data.length ? 
                <h3 className="mt-10 no-select text-2xl pb-4 border-b border-gray-200 relative after:content[''] after:absolute after:bottom-[-1px] 
                    after:right-0 after:w-16 after:rounded-md after:h-[2px] after:bg-[--main-color] max-[640px]:text-xl max-[640px]:mb-0">
                        {title}
                </h3> : null
            }

            {
                slides > 3 ?

                <Swiper modules={[Navigation, Autoplay]} spaceBetween={20} slidesPerView={slides} autoplay={{delay: 5000}} loop={true} navigation={true}
                    breakpoints={{ 0: {slidesPerView: 1.5}, 500: {slidesPerView: 2}, 748: {slidesPerView: 3}, 1000: {slidesPerView: 4}, 1200: {slidesPerView: 5} }}>
                    
                    {data.map((product) =>
                        <SwiperSlide key={product.id}>
                            <Link href={`/product/${product.id}`}><Card data={product}/></Link>
                        </SwiperSlide>
                    )}

                </Swiper> :

                <Swiper modules={[Navigation, Autoplay]} spaceBetween={20} slidesPerView={slides} autoplay={{delay: 5000}} loop={true} navigation={true}
                    breakpoints={{ 0: {slidesPerView: 1}, 700: {slidesPerView: 2} }}>

                    {data.map((product) =>
                        <SwiperSlide key={product.id}>
                            <Link href={`/product/${product.id}`}><Card data={product} big/></Link>
                        </SwiperSlide>
                    )}

                </Swiper>

            }
        </div>

    );

}
