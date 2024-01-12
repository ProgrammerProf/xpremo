"use client";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Header() {

    return (

        <header>

            <Swiper modules={[Navigation, Pagination, Autoplay]} pagination={{clickable: true}} autoplay={{delay: 5000}} loop={true} navigation={true}>

                <SwiperSlide><img src="/media/header/1.png"/></SwiperSlide>
                <SwiperSlide><img src="/media/header/2.png"/></SwiperSlide>
                <SwiperSlide><img src="/media/header/3.png"/></SwiperSlide>
                <SwiperSlide><img src="/media/header/4.png"/></SwiperSlide>

            </Swiper>

        </header>

    );

}
