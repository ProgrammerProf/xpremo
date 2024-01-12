"use client";
import Nav from "@/app/component/nav";
import Footer from "@/app/component/footer";
import Card from "@/app/component/card";
import { Fragment } from "react";
import Link from "next/link";

export default function Category ({ products }) {

    return (

        <Fragment>

            <Nav />

            <div className="container">

                <div className="w-full mb-[4rem] category-info no-select">

                    <div className="links-bar w-full flex justify-start items-center">

                        <div className="flex justify-center items-center">

                            <Link href="/">الرئيسية</Link>

                            <span className="material-symbols-outlined icon">arrow_back_ios</span>

                        </div>

                        <div className="none flex justify-center items-center">

                            <a>الأجهزة الإلكترونية</a>

                            <span className="material-symbols-outlined icon">arrow_back_ios</span>

                        </div>

                    </div>

                    <div className="head w-full mt-[1rem]">
                        
                        <h1>الأجهزة الإلكترونية</h1>

                    </div>

                    <div className="flex justify-between items-center flex-wrap mb-[4rem]">
                        {
                            products && products.map( (item, index) => 
                                
                                <Link key={index} href={`/product/${item.id}`} className="w-[22%]"><Card data={item}/></Link>

                            )
                        }
                    </div>

                </div>

            </div>

            <Footer />

        </Fragment>

    );

}
