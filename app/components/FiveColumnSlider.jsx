"use client";
import { specialOffers } from "../constants";
import { Splide, SplideSlide } from "splide-nextjs/react-splide";
import { ProductMiniCard } from "./";

export default function FiveColumnSlider () {

    return (

        <div dir="ltr" className="best-offers">

            <Splide className="flex flex-wrap justify-between"
                options={{
                    type: "loop",
                    autoplay: true,
                    interval: 5000,
                    rtl: true,
                    perPage: 5,
                    gap: 30,
                    mediaQuery: "min",
                    breakpoints: {
                        1000: { perPage: 4 },
                        800: { perPage: 3 },
                        640: { perPage: 2, gap: 12 },
                    },
                }}
                >
                {
                    specialOffers.map((card, i) => (
                        <SplideSlide key={i}>
                            <ProductMiniCard item={card} />
                        </SplideSlide>
                    ))
                }
            </Splide>

        </div>

    );

};
