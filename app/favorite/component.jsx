"use client";
import Nav from "@/app/component/nav";
import Footer from "@/app/component/footer";
import Card from "@/app/component/card";
import { Fragment } from "react";
import Link from "next/link";

export default function Favorite () {

    const products = [
        {
            id: 1,
            name: "ايفون 13 برو ماكس",
            new_price: 1200,
            old_price: 0,
            image: "/media/product/1.png",
            image_hover: "/media/product/2.png",
            company: "ايفون",
            type: "جديد",
            description: "الشاشة: يأتي iPhone 13 Pro Max بشاشة Super Retina XDR OLED بحجم 6.7 بوصة. تتميز الشاشة بدقة عالية وألوان غنية وسطوع ممتاز. الأداء: يعتمد iPhone 13 Pro Max على شريحة A15 Bionic، وهي شريحة معالجة قوية توفر أداءً متفوقًا وكفاءة طاقة محسّنة. تتيح هذه الشريحة القدرة على تشغيل التطبيقات والألعاب الثقيلة بسلاسة.",
            count: "9",
            rate: 4,
        },
        {
            id: 2,
            name: "ايفون 13 برو ماكس",
            new_price: 1200,
            old_price: 0,
            image: "/media/product/3.png",
            image_hover: "/media/product/4.png",
            company: "ايفون",
            type: "جديد",
            description: "الشاشة: يأتي iPhone 13 Pro Max بشاشة Super Retina XDR OLED بحجم 6.7 بوصة. تتميز الشاشة بدقة عالية وألوان غنية وسطوع ممتاز. الأداء: يعتمد iPhone 13 Pro Max على شريحة A15 Bionic، وهي شريحة معالجة قوية توفر أداءً متفوقًا وكفاءة طاقة محسّنة. تتيح هذه الشريحة القدرة على تشغيل التطبيقات والألعاب الثقيلة بسلاسة.",
            count: "9",
            rate: 4,
        },
        {
            id: 3,
            name: "ايفون 13 برو ماكس",
            new_price: "1200",
            old_price: "3000",
            image: "/media/product/5.png",
            image_hover: "/media/product/6.png",
            company: "ايفون",
            type: "جديد",
            description: "الشاشة: يأتي iPhone 13 Pro Max بشاشة Super Retina XDR OLED بحجم 6.7 بوصة. تتميز الشاشة بدقة عالية وألوان غنية وسطوع ممتاز. الأداء: يعتمد iPhone 13 Pro Max على شريحة A15 Bionic، وهي شريحة معالجة قوية توفر أداءً متفوقًا وكفاءة طاقة محسّنة. تتيح هذه الشريحة القدرة على تشغيل التطبيقات والألعاب الثقيلة بسلاسة.",
            count: "9",
            rate: 4,
        },
        {
            id: 4,
            name: "ايفون 13 برو ماكس",
            new_price: "1200",
            old_price: "3000",
            image: "/media/product/7.png",
            image_hover: "/media/product/8.png",
            company: "ايفون",
            type: "جديد",
            description: "الشاشة: يأتي iPhone 13 Pro Max بشاشة Super Retina XDR OLED بحجم 6.7 بوصة. تتميز الشاشة بدقة عالية وألوان غنية وسطوع ممتاز. الأداء: يعتمد iPhone 13 Pro Max على شريحة A15 Bionic، وهي شريحة معالجة قوية توفر أداءً متفوقًا وكفاءة طاقة محسّنة. تتيح هذه الشريحة القدرة على تشغيل التطبيقات والألعاب الثقيلة بسلاسة.",
            count: "9",
            rate: 4,
        },
        {
            id: 6,
            name: "ايفون 13 برو ماكس",
            new_price: "1200",
            old_price: "3000",
            image: "/media/product/11.png",
            image_hover: "/media/product/12.png",
            company: "ايفون",
            type: "جديد",
            description: "الشاشة: يأتي iPhone 13 Pro Max بشاشة Super Retina XDR OLED بحجم 6.7 بوصة. تتميز الشاشة بدقة عالية وألوان غنية وسطوع ممتاز. الأداء: يعتمد iPhone 13 Pro Max على شريحة A15 Bionic، وهي شريحة معالجة قوية توفر أداءً متفوقًا وكفاءة طاقة محسّنة. تتيح هذه الشريحة القدرة على تشغيل التطبيقات والألعاب الثقيلة بسلاسة.",
            count: "9",
            rate: 4,
        },
    ];

    return (

        <Fragment>

            <Nav />

            <div className="container">

                <h4 className="text-center text-3xl font-bold my-10 mb-5 no-select">منتجاتك المفضلة</h4>

                <div className="flex justify-between items-center flex-wrap mb-[4rem]">
                    {
                        products && products.map( (item, index) => 
                            
                            <Link key={index} href={`/product/${item.id}`} className="w-[22%]"><Card data={item}/></Link>

                        )
                    }
                </div>

            </div>

            <Footer />

        </Fragment>

    );

};
