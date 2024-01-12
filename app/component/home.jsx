"use client";
import Nav from "@/app/component/nav";
import Footer from "@/app/component/footer";
import Header from "@/app/component/header";
import Feature from "@/app/component/feature";
import Banner from "@/app/component/banner";
import Cards from "@/app/component/cards";
import { Fragment } from "react";

export default function Home ({ products }) {

    return (

        <Fragment>

            <Nav />

            <div className="container">

                <div className="mt-5 mb-[4rem]">

                    <Header />

                    <Feature />

                    <Banner />

                    <Cards data={products} slides={2} title={"الأكثر مبيعا"}/>

                    <Banner />

                    <Cards data={products} slides={5} title={"خصومات على المنتجات"}/>

                    <Cards data={products} slides={5} title={"المشاهدة مؤخرا"}/>

                    <Cards data={products} slides={5} title={"الأجهزة الكهربائية"}/>

                    <Cards data={products} slides={5} title={"الموبايلات والإكسسوارات"}/>
                    
                    <Cards data={products} slides={5} title={"الملابس والإحذية"}/>

                </div>

            </div>

            <Footer />

        </Fragment>

    );

}
