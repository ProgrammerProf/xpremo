"use client";
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/virtual';

export default function Header() {

    return (

        <Swiper modules={[Pagination, Autoplay]} spaceBetween={0} slidesPerView={1} pagination={{clickable: true}}
            autoplay={{delay: 5000}} speed={500} loop={true}>

            <SwiperSlide className="md:h-screen object-cover max-h-[350px] aspect-[1.2/1] flex max-[640px]:max-h-[190px]">
                <img src="/media/header/1.png"/>
            </SwiperSlide>
            <SwiperSlide className="md:h-screen object-cover max-h-[350px] aspect-[1.2/1] flex max-[640px]:max-h-[190px]">
                <img src="/media/header/2.png"/>
            </SwiperSlide>
            <SwiperSlide className="md:h-screen object-cover max-h-[350px] aspect-[1.2/1] flex max-[640px]:max-h-[190px]">
                <img src="/media/header/3.png"/>
            </SwiperSlide>
            <SwiperSlide className="md:h-screen object-cover max-h-[350px] aspect-[1.2/1] flex max-[640px]:max-h-[190px]">
                <img src="/media/header/4.png"/>
            </SwiperSlide>

        </Swiper>

    );

}
