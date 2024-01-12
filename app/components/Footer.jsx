"use client";
import Link from "next/link";

export default function Footer () {

    const scrollUp = () => { window.scrollTo({ top: 0, behavior: "smooth" }); };

    const footerLinksAbout = [
        { title: "معلومات عن اكسبريمو", href: "" },
        { title: " الشحن و التوصيل", href: "" },
    ];

    const footerLinksShop = [
        { title: " حسابك ", href: "" },
        { title: "مشترياتك  ", href: "" },
        { title: " تتبع الطلب ", href: "" },
    ];

    const footerLinksHelp = [
        { title: " المساعدة و الدعم ", href: "" },
        { title: " سياسة الاسترجاع ", href: "" },
        { title: " الشروط و الأحكام ", href: "" },
    ];

    return (
        
        <footer className="bg-[#394150]">

            <h6 onClick={scrollUp} className="bg-[#4D5669] text-center p-5 text-white font-bold cursor-pointer hover:text-[--main-color]">
                الرجوع للأعلي
            </h6>

            <div className=" container m-auto top-footer flex justify-between items-start  py-5 max-[770px]:flex-wrap max-[640px]:px-5 max-[770px]:justify-start">
                
                <div className="big-row w-[35%] max-[770px]:w-[58%] max-[640px]:w-[100%]  max-[770px]:mb-4">

                    <p href="" className="mb-2 logo text-[35px] font-bold text-white">
                        <span className="text-[--main-color] text-[40px]">X</span>Premo
                    </p>

                    <div className="flex gap-3 items-center">

                        <div>
                            <h4 className="text-white text-lg font-bold mb-1">خدمة عملاء 24/7</h4>
                            <h4 className="text-black text-lg font-bold">+20 123 456 789</h4>
                        </div>

                        <svg className="fill-[--main-color]" width={80} version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M116.8,212.8c0-9.5-7.6-17.4-17.1-17.4c-0.1,0-0.1,0-0.2,0C47.9,195.4,6,237.3,6,288.9s41.9,93.5,93.5,93.5   c0.1,0,0.1,0,0.2,0c9.5,0,17.1-7.9,17.1-17.4V212.8z" id="XMLID_5_"/>
                                <path d="M395.2,212.8c0-9.5,7.6-17.4,17.1-17.4c0.1,0,0.1,0,0.2,0c51.6,0,93.5,41.9,93.5,93.5s-41.9,93.5-93.5,93.5   c-0.1,0-0.1,0-0.2,0c-9.5,0-17.1-7.9-17.1-17.4V212.8z" id="XMLID_4_"/>
                                <g><path d="M460.7,271.1c-9.6,0-17.4-8.1-17.4-18.2c0-107.7-83.9-181.3-187.1-181.3S69.1,145.3,69.1,252.9    c0,10-7.8,18.2-17.4,18.2s-17.4-8.1-17.4-18.2c0-127.7,99.6-231.6,221.9-231.6s221.9,103.9,221.9,231.6    C478.1,263,470.3,271.1,460.7,271.1z" id="XMLID_3_"/></g>
                                <g><path d="M300.5,465.9c-5.8,0-11.9-0.3-18.2-0.8l2-23.2c112.2,9.8,137-83.3,138-87.3l22.6,5.6    c-0.3,1.2-7.5,29.8-31.2,56.9C393.8,440.1,358.4,465.9,300.5,465.9z" id="XMLID_2_"/></g>
                                <circle cx="280.2" cy="454.3" id="XMLID_1_" r="36.4" />
                            </g>
                        </svg>

                    </div>

                </div>

                <div className="row w-[20%] max-[770px]:w-[40%] max-[640px]:w-[100%] max-[770px]:mb-6">

                    <h3 className="font-extrabold text-white text-lg mb-6">اعرف المزيد عنا</h3>

                    {
                        footerLinksAbout.map((link, idx) => (

                            <Link key={idx} href={link.href} className="group flex relative right-0 hover:right-1 hover:text-[--main-color] mb-2 items-center text-gray-300">
                                
                                <svg className="translate-y-px fill-white group-hover:fill-[--main-color]" width="18" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30.83 32.67l-9.17-9.17 9.17-9.17-2.83-2.83-12 12 12 12z"/>
                                    <path d="M0-.5h48v48h-48z" fill="none"/>
                                </svg>

                                <span>{link.title}</span>

                            </Link>

                        ))
                    }

                </div>

                <div className="row w-[20%] max-[770px]:w-1/2 max-[640px]:w-[49%] max-[770px]:mb-2">

                    <h3 className="font-extrabold text-white text-lg mb-6">تسوق معنا</h3>
                    
                    {
                        footerLinksShop.map((link, idx) => (

                            <Link key={idx} href={link.href} className="group flex relative text-sm right-0 hover:right-1 hover:text-[--main-color] mb-2 items-center text-gray-300">
                                
                                <svg className="translate-y-px fill-white group-hover:fill-[--main-color]" width="18" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30.83 32.67l-9.17-9.17 9.17-9.17-2.83-2.83-12 12 12 12z"/>
                                    <path d="M0-.5h48v48h-48z" fill="none"/>
                                </svg>

                                <span>{link.title}</span>

                            </Link>

                        ))
                    }

                </div>

                <div className="row w-[20%] max-[770px]:w-1/2 max-[640px]:w-[49%] max-[770px]:mb-2">

                    <h3 className="font-extrabold text-white mb-6 text-lg">دعنا نساعدك</h3>

                    {
                        footerLinksHelp.map((link, idx) => (

                            <Link key={idx} href={link.href} className="group flex relative text-sm right-0 hover:right-1 hover:text-[--main-color] mb-2 items-center text-gray-300">
                            
                                <svg className="translate-y-px fill-white group-hover:fill-[--main-color]" width="18" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30.83 32.67l-9.17-9.17 9.17-9.17-2.83-2.83-12 12 12 12z"/>
                                    <path d="M0-.5h48v48h-48z" fill="none"/>
                                </svg>
                                
                                <span>{link.title}</span>

                            </Link>

                        ))
                    }

                </div>

            </div>

            <div className="btm-footer bg-[#202935] py-5 px-[5%]">

                <div className="container m-auto flex justify-between items-center max-[770px]:flex-col max-[770px]:gap-3 max-[750px]:justify-center">

                    <p className="text-white max-[400px]:text-xs">Copyright © XPremo</p>

                    <div className="img-payment flex gap-1">

                        <img width={60} height={30} className="grayscale hover:grayscale-0 cursor-pointer" src="https://res.cloudinary.com/dbre6azp4/image/upload/v1694292536/E-Commrce/u3fdsljwj2jm7zwxs7vr.webp" alt="_"/>
                        <img width={60} height={30} className="grayscale hover:grayscale-0  cursor-pointer" src="https://res.cloudinary.com/dbre6azp4/image/upload/v1694292536/E-Commrce/a273emcmjsxrptisydkk.webp" alt="_"/>
                        <img width={60} height={30} className="grayscale hover:grayscale-0 cursor-pointer" src="https://res.cloudinary.com/dbre6azp4/image/upload/v1694292536/E-Commrce/ojxzrzamiqzvdc6gygk0.png" alt="_"/>
                        <img width={60} height={30} className="grayscale hover:grayscale-0 cursor-pointer" src="https://res.cloudinary.com/dbre6azp4/image/upload/v1694292457/a63yzrf98ja1xu7fvtit.png" alt="_"/>
                    
                    </div>

                </div>

            </div>

        </footer>

    );

};
