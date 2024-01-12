"use client";
import Nav from "@/app/component/nav";
import Footer from "@/app/component/footer";
import Card from "@/app/component/card";
import { Fragment } from "react";
import Link from "next/link";

export default function Search ({ products }) {

    return (

        <Fragment>

            <Nav />

            <div className="container">

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

}
