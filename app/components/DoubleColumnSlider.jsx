"use client";
import { Splide, SplideSlide } from "splide-nextjs/react-splide";
import { ProductCard } from ".";
import { specialOffers } from "../constants";

export default function DoubleColumnSlider() {

    return (

        <div dir="ltr" className="best-seller">

            <Splide className="flex flex-wrap justify-between"
                options={{
                    type: "loop",
                    autoplay: true,
                    interval: 5000,
                    rtl: true,
                    perPage: 2,
                    gap: 30,
                    mediaQuery: "min",
                    breakpoints: {
                        1000: { perPage: 2 },
                        640: { perPage: 1 },
                    },
                }}
                >
                {
                    specialOffers.map((card, i) => (
                        <SplideSlide key={i}>
                            <ProductCard {...card} itemData={card} />
                        </SplideSlide>
                    ))
                }
            </Splide>

        </div>

    );

}
