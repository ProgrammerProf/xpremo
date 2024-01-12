"use client";
import { useState } from "react";
import { StarsRate } from ".";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/sideCartSlice";
import { useRouter } from "next/navigation";

export default function ProductPageCard({ product }) {

    const [activeImg, setActiveImg] = useState(product.img);
    const dispatch = useDispatch();
    const router = useRouter();
    const cartItems = useSelector((state) => state.sideCart.items);
    const handleAddToCart = () => { dispatch(addToCart(product)); };

    const handleBuyNow = () => {

        if (!cartItems.find((e) => e.id === product.id)) { dispatch(addToCart(product)); }

        router.push(`/checkout`);

    };

    return (

        <div className="pt-40 bg-white py-10">

            <div className="w-[90%] mx-auto ">

                <div className="flex justify-between py-6 max-[1000px]:flex-col-reverse max-[1000px]:justify-center max-[1000px]:items-center">

                    <div className="div-itemInfo w-1/2 py-6 max-[1000px]:w-full">

                        <h1 className="text-3xl font-bold">{product.name}</h1>

                        <div className="my-7"><StarsRate rate={product.rate}/></div>

                        <div className="price flex gap-6 items-center mb-6">

                            <span className="font-bold text-2xl">{product.price} جنيه</span>

                            {
                                product.priceOld && (
                                    <span className="line-through text-gray-500 font-bold">
                                        {product.priceOld} جنيه
                                    </span>
                                )
                            }

                        </div>

                        {product.company && (<h5 className=" font-bold mb-2">الشركة : {product.company}</h5>)}

                        {product.type && (<h5 className="font-bold mb-3">النوع: {product.type}</h5>)}

                        <p>{product.descr}</p>

                        {
                            product.count > 1 && (
                                <h3 className="font-bold my-8 text-2xl">
                                    {product.count < 5 ? `متبقي ${product.count} فقط في المخزن` : `متوفر`}
                                </h3>
                            )
                        }

                        <div>

                            <div className="flex my-14 gap-5 items-center max-[640px]:gap-3 max-[640px]:justify-center">

                                <button onClick={() => handleAddToCart()} className="group flex border transition-colors duration-300 bg-white  border-black hover:bg-main hover:text-white hover:border-white font-bold py-3 px-12 gap-1 rounded-[30px] max-[640px]:px-8 max-[640px]:text-sm">
                                    اضف للسلة
                                </button>

                                <button onClick={() => handleBuyNow()} className="group flex border bg-main text-white border-white font-bold  py-3 px-10 gap-1 rounded-[30px] max-[640px]:px-8 max-[640px]:text-sm">
                                    اشتري الان
                                </button>

                            </div>

                        </div>

                    </div>

                    <div className="div-itemImg w-[40%] max-[1000px]:w-full max-[1000px]:mb-10">

                        <div className="w-full flex flex-col items-center max-[1000px]:w-2/3 max-[1000px]:m-auto max-[640px]:w-full">

                            <img src={activeImg} width={500} height={500} className="w-full bg-red-500 max-[640px]:w-4/5" alt="_"/>

                            <div className="flex max-[1050px]:justify-between">
                                {
                                    product.additionalImages.length > 0 && (

                                        <>

                                            <img src={product.img} onClick={() => setActiveImg(product.img)} className="transition-all duration-200 hover:scale-110 cursor-pointer max-[1050px]:w-[24%]" alt="_" width={100} height={100}/>
                                            
                                            {
                                                product.additionalImages.map((img, i) => {

                                                    return (

                                                        <img key={i} src={img.src} width={100} height={100} onClick={() => setActiveImg(img.src)} className="transition-all duration-200 hover:scale-110 cursor-pointer max-[1050px]:w-[24%]" alt="_"/>
                                                    
                                                    );

                                                })
                                            }

                                        </>

                                    )
                                }
                            </div>

                        </div>

                    </div>

                </div>

                <div className="moreDesc mt-5 mb-12 max-[640px]:mb-0">

                    <div className="top-sec">

                        <h3 className="text-3xl pb-4 mb-6 border-b border-gray-300 relative after:content[''] after:absolute after:bottom-[-1px] after:right-0  after:w-20 after:rounded-md after:h-[2px] after:bg-[--maine-color]">
                            تفاصيل
                        </h3>

                    </div>

                    {
                        product.details.map((e, i) => {

                            return (

                                <p key={i} className="text-lg mb-2 max-[640px]:text-base max-[640px]:mb-0">{i + 1}.{e}</p>

                            );
                            
                        })
                    }

                </div>

            </div>

        </div>

    );

}
