"use client";
import { specialOffers } from "../constants";
import { Splide, SplideSlide } from "splide-nextjs/react-splide";
import { ProductMiniCard } from ".";

export default function SlideCardWithImg ({ left }) {

    return (

        <div className={`flex items-center gap-3 justify-between ${left ? "flex-row" : "flex-row-reverse"}`}>

            <div dir="ltr" className="w-full max-[640px]:w-full">

                <Splide className="flex flex-wrap justify-between"
                    options={{
                        type: "loop",
                        autoplay: true,
                        interval: 5000,
                        rtl: true,
                        perPage: 4,
                        gap: 30,
                        mediaQuery: "min",
                        breakpoints: {
                            1000: { perPage: 3 },
                            800: { perPage: 2 },
                            640: { perPage: 2, gap: 15 },
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

        </div>

    );

};
