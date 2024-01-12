"use client";
import Nav from "@/app/component/nav";
import Footer from "@/app/component/footer";
import Stars from "@/app/component/stars";
import Cards from "@/app/component/cards";
import { Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Product ({ data, products }) {

    const router = useRouter();

    return (

        <Fragment>

            <Nav />

            <div className="container">

                <div className="w-full mb-[4rem] product-info">

                    <div className="links-bar w-full flex justify-start items-center">

                        <div className="flex justify-center items-center">

                            <Link href="/">الرئيسية</Link>

                            <span className="material-symbols-outlined icon">arrow_back_ios</span>

                        </div>

                        <div className="flex justify-center items-center">

                            <Link href="/">الأجهزة الإلكترونية</Link>

                            <span className="material-symbols-outlined icon">arrow_back_ios</span>

                        </div>

                        <div className="none flex justify-center items-center">

                            <Link href="/">ايفون بروماكس</Link>

                            <span className="material-symbols-outlined icon">arrow_back_ios</span>

                        </div>

                    </div>

                    <div className="m-auto my-5 shadow bg-white">

                        <div className="flex justify-between p-8 max-[1000px]:flex-col-reverse max-[1000px]:justify-center max-[1000px]:items-center">

                            <div className="div-itemInfo w-1/2 max-[1000px]:w-full default">

                                <h1 className="text-2xl font-bold">{data.name}</h1>

                                <div className="my-3"><Stars rate={data.rate}/></div>

                                <div className="price flex gap-6 items-center mb-6">

                                    <span className="font-bold text-2xl">{data.new_price} جنيه</span>

                                    { data.old_price && <span className="line-through text-gray-500 font-bold">{data.old_price} جنيه</span> }

                                </div>

                                { data.company && <h5 className=" font-bold mb-2">الشركة : {data.company}</h5> }

                                { data.type && <h5 className="font-bold mb-3">النوع: {data.type}</h5> }

                                <p>{data.description}</p>

                                { data.count > 1 && <h3 className="font-bold my-8 text-2xl">{data.count < 5 ? `متبقي ${data.count} فقط في المخزن` : `متوفر`}</h3> }

                                <div className="actions flex my-10 gap-5 items-center max-[640px]:gap-3 max-[640px]:justify-center">

                                    <button className="flex justify-center items-center">
                                        <span className="material-symbols-outlined">shopping_cart</span>
                                        إضافة للسلة
                                    </button>

                                    <button className="flex justify-center items-center" onClick={_ => router.push('/checkout')}>
                                        إشترى الان
                                    </button>

                                </div>

                            </div>

                            <div className="relative div-itemImg w-[40%] max-[1000px]:w-full max-[1000px]:mb-10">

                                <div className="icons flex z-20 flex-col gap-2 absolute right-3 top-3 group-hover:right-4">

                                    <button className="group/edit hover:bg-[--main-color] rounded-full relative w-10 h-10 bg-slate-100 border border-[--main-color]">
                                        <svg className="absolute stroke-2 stroke-[--main-color] group-hover/edit:stroke-white left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 group-hover/edit:fill-[#fff] fill-[--main-color]" width={20} id="Editable-line" version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16,8.064c-2.974-2.753-7.796-2.753-10.77,0s-2.974,7.215,0,9.968L16,28l10.77-9.968c2.974-2.753,2.974-7.215,0-9.968  
                                            S18.974,5.312,16,8.064z" fill="none" id="XMLID_49_"/>
                                        </svg>
                                    </button>

                                </div>

                                {
                                    data.images.length &&

                                    <div className="w-full flex flex-col items-center max-[1000px]:w-2/3 max-[1000px]:m-auto max-[640px]:w-full">

                                        <div className="flex w-[100%] justify-center items-center big-image layer">

                                            <img src={data.images[0][1]} width={500} height={500} className="w-[70%] max-[640px]:w-4/5"/>

                                        </div>

                                        <div className="small-image w-[100%]">
                                            {
                                                data.images.slice(1, 5).map((item, index) =>

                                                    item[0] === "image" ? <div className="image layer"><img key={index} src={item[1]}/></div>

                                                    : <div className="image layer"><video key={index} src={item[1]}></video></div>

                                                )
                                            }
                                        </div>
                                    
                                    </div>
                                    
                                }
                            </div>

                        </div>

                        <div className="moreDesc px-8 default">

                            <div className="top-sec no-select">تفاصيل المنتج</div>

                            <div className="details">{data.details}</div>

                        </div>

                    </div>

                    <Cards data={products} slides={5} title={"منتجات مشابهة"}/>

                </div>

            </div>

            <Footer />

        </Fragment>

    );

}
