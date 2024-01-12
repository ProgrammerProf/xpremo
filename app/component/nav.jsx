"use client";
import Link from "next/link";
import { Fragment, useEffect } from "react";

export default function Navbar ({ single, register }) {

    const categories = [
        { id: 1, name: 'الأجهزة الكهربائية' },
        { id: 2, name: 'الأدوات المنزلية' },
        { id: 3, name: 'الموبايلات والإكسسوارات' },
        { id: 4, name: 'مستحضرات التجميل' },
        { id: 5, name: 'الملابس والأحذية' },
        { id: 6, name: 'المفروشات' },
    ];
    const show_side = (side) => {

        $(`.nav-side.side-${side}`).fadeIn(200).addClass("open");

    }
    const hide_side = () => {

        $(".nav-side").fadeOut(300).removeClass("open");

    }
    useEffect(() => {

        if ( $(window).scrollTop() > 2 ) $(".top-nav").addClass("shadow");
        else $(".top-nav").removeClass("shadow");
        $(window).on("scroll", function(){
            if ( $(window).scrollTop() > 2 ) $(".top-nav").addClass("shadow");
            else $(".top-nav").removeClass("shadow");
        });

    }, []);

    return (

        <Fragment>

            <div className={`border-b bg-white no-select top-nav sticky ${ single && "shadow-sm" }`}>

                <div className="container m-auto top-header flex py-[7px] pb-[8px] justify-between items-center max-[800px]:flex-wrap">

                    <Link href="/" className="logo text-[30px] font-bold max-[800px]:text-[25px] mt-[-5px]">
                        <span className="text-[--main-color] text-[35px] max-[800px]:text-[30px]">X</span>
                        Premo
                    </Link>

                    {
                        !single && 
                        <div className="search-box w-[40%] max-[800px]:order-2">
                        
                            <input type="text" placeholder="بحث ..."/>

                        </div>
                    }

                    <div className="hide flex justify-center items-center">

                        <div className="cart-logo flex justify-center items-center">

                            <p className="mt-[-1px] text-[#444] text-[15px]">السلة : <span>0</span> جنيه</p>

                            <div onClick={_ => show_side('cart')} className="group cartCount relative h-[35px] w-[35px] border border-[#bfbfbfc2] mr-3 rounded-full flex justify-center hover:bg-black cursor-pointer">
                                
                                <span className="text-[11px] pb-[1px] absolute top-[-5px] text-sm left-[-5px] w-[17px] h-[17px] bg-[red] text-white text-center rounded-full flex justify-center items-center">
                                    0
                                </span>

                                <svg className="transition-colors duration-300 group-hover:fill-white mt-[-1px] ml-[1px]" width="15" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M416 160h-72V120C344 53.83 290.2 0 224 0S104 53.83 104 120V160H32C14.33 160 0 174.3 0 192v240C0 476.2 35.82 
                                    512 80 512h288c44.18 0 80-35.82 80-80V192C448 174.3 433.7 160 416 160zM152 120C152 80.3 184.3 48 224 48s72 32.3 72 
                                    72V160h-144V120zM128 248C114.8 248 104 237.3 104 224S114.8 200 128 200S152 210.8 152 224S141.3 248 128 248zM320 
                                    248c-13.25 0-24-10.75-24-24S306.8 200 320 200S344 210.8 344 224S333.3 248 320 248z"/>
                                </svg>

                            </div>

                        </div>

                        <Link href="/" className="mr-[1rem]">

                            <svg className="bi bi-house-heart-fill fill-[--main-color] mt-[-3px]" height="35" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.707L8 2.207l6.646 6.646a.5.5 0 0 0 .708-.707L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" fillRule="evenodd"></path>
                                <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Zm0 5.189c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018Z" fillRule="evenodd"></path>
                            </svg>
                            
                        </Link>

                    </div>

                    <div className="flex justify-center items-center">

                        {
                            !single &&
                                
                            <div className="flex justify-center items-center">

                                <div onClick={_ => show_side('cart')} className="cart flex justify-center items-center pointer">

                                    <span className="material-symbols-outlined icon">shopping_cart</span>

                                    <p>0</p>

                                </div>

                                <Link href="/favorite" className="flex justify-center items-center wishlist">

                                    <span className="material-symbols-outlined icon pt-[1px]">favorite</span>

                                    <p>0</p>

                                </Link>

                            </div>
                            
                        }

                        {
                            register ? 
                            <Link href="/register" className="button">

                                <span className="material-symbols-outlined icon">person_add</span>

                                إنشاء حساب

                            </Link> : 

                            <Link href="/login" className="button">

                                <span className="material-symbols-outlined icon">person_add</span>
    
                                تسجيل دخول
    
                            </Link>

                        }

                        
                    </div>

                </div>

            </div>

            { !single &&
                <div className="shadow bg-white no-select mt-[-0px]">

                    <div className="container m-auto max-[1000px]:py-3 flex justify-between items-center">

                        <div className="flex justify-center items-center">

                            <svg onClick={_ => show_side('bar')} className="pointer" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z" fill="currentColor"/>
                                <path d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z" fill="currentColor"/>
                                <path d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z" fill="currentColor"/>
                            </svg>

                            <ul className="mr-10 gap-4 mb-1 nav-links flex max-[1000px]:hidden">

                                <li className="py-5 px-3 text-[#444] hover:text-[--main-color] font-bold relative text-sm after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full w-max after:h-[3px] after:bg-[--main-color]">
                                    <Link href="/" className="py-5">الرئيسية</Link>
                                </li>

                                {
                                    categories && categories.slice(0, 4).map((category) => 
                                        <li key={category.id} className="py-5 px-3 text-[#444] hover:text-[--main-color] font-bold relative text-sm after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full w-max after:h-[3px] after:bg-[--main-color]">
                                            <Link href={`/category/${category.id}/${category.name}`} className="py-5">{category.name}</Link>
                                        </li>
                                    )
                                }

                            </ul>

                        </div>

                    </div>

                </div>
            }

            <aside className="side-bar nav-side" onClick={_ => _.target.nodeName == "ASIDE" && hide_side()}>

                <div>

                    <div className="px-3 py-2 pb-3 flex items-start justify-between border-b h-[60px]">

                        <p className="text-[25px] font-bold mt-[-2px]">

                            <span className="text-[--main-color] text-[27px]">X</span>Premo

                        </p>

                        <span className=" mt-[2px] pointer rounded-full opacity-[.6] hover:opacity-[1]" onClick={hide_side}>
                            
                            <svg viewBox="0 0 24 24" width="35" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 
                                    16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 
                                    7.757 9.172l1.415-1.415L12 10.586z"/>
                                </g>
                            </svg>

                        </span>

                    </div>

                    <ul className="py-2">
                    
                        <li className="text-lg hover:bg-[#eaf5f2]"><Link href="/" className="py-3 px-6 w-full block text-[16px]">الرئيسية</Link></li>

                        {
                            categories && categories.map((category) => 
                                <li key={category.id} className="text-lg hover:bg-[#eaf5f2]">
                                    <Link href={`/category/${category.id}/${category.name}`} className="py-3 px-6 w-full block text-[16px]">{category.name}</Link>
                                </li>
                            )
                        }

                    </ul>

                </div>

            </aside>

            <aside className="side-cart nav-side" onClick={_ => _.target.nodeName == "ASIDE" && hide_side()}>

                <div>

                    <div className="px-3 py-2 pb-3 flex items-start justify-between border-b h-[60px]">

                        <p className="text-[19px] font-bold mt-[5px]">

                            سلة <span className="text-[--main-color]">المشتريات</span>

                        </p>

                        <span className="mt-[2px] pointer rounded-full opacity-[.6] hover:opacity-[1]" onClick={hide_side}>
                            
                            <svg viewBox="0 0 24 24" width="35" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 
                                    16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 
                                    7.757 9.172l1.415-1.415L12 10.586z"/>
                                </g>
                            </svg>

                        </span>

                    </div>

                    <ul className="px-3 overflow-y-auto scroll">

                        <li className="flex justify-between w-[100%] py-4 border-b">

                            <div className="ml-4 flex flex-1 flex-col">

                                <div className="flex justify-between text-base font-medium text-gray-900 max-[640px]:text-sm">
                                
                                    <p className="text-[15px] hover:text-[--main-color] over-hide h-[1.8rem] w-[60%] mt-[-1px] text-[#333]">
                                        <Link href={`/`}>ايفون بروماكس الجديد</Link>
                                    </p>
                                
                                    <p className="mr-4 text-left text-[#555]">5000 جنيه</p>
                                
                                </div>

                                <div className="flex flex-1 items-center justify-between text-sm mt-2">

                                    <div className="text-gray-900 flex gap-3 items-center">

                                        <div className="over-hide border border-[#999] flex gap-3 items-center py-[2px] pb-[2.5px] rounded-[30px] text-[20px]">

                                            <button className="pointer hover:text-[--main-color] pb-1 w-[2rem] text-[center]">+</button>
                                            
                                            <span className="text-[15px] pointer">2</span>
                                            
                                            <button className="pointer hover:text-[--main-color] pb-1 w-[2rem] text-[center]">-</button>
                                        
                                        </div>

                                    </div>

                                    <div className="flex mt-[-1px]">

                                        <button type="button" className="font-medium text-[--main-color] flex items-center hover:text-[--hover]">

                                            <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" 
                                                strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                                <polyline points="3 6 5 6 21 6"/>
                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                                                <line x1="10" x2="10" y1="11" y2="17"/>
                                                <line x1="14" x2="14" y1="11" y2="17"/>
                                            </svg>

                                            حذف

                                        </button>

                                    </div>

                                </div>

                            </div>

                            <div className="h-[65px] w-[75px] flex-shrink-0 overflow-hidden rounded-[5px] border border-gray-100 layer">

                                <img src="/media/header/1.png" className="h-full w-full object-cover object-center"/>

                            </div>

                        </li>

                    </ul>

                    <div className="h-[155px] border-t border-gray-200 px-4 py-6 sm:px-6">

                        <div className="flex justify-between text-base font-medium text-gray-900">

                            <p>الاجمالي</p>

                            <p className="mt-[2px]">20 جنيه </p>

                        </div>

                        <p className="mt-0.5 text-sm text-gray-500">
                            لا يشمل الضرائب وتكاليف الشحن
                        </p>

                        <div className="mt-6">

                            <Link href="/" className="flex items-center justify-center rounded-md border border-transparent bg-[--main-color] px-6 py-2 pb-3 hover:bg-[--hover] text-base font-medium text-white shadow-sm">
                                شراء الان
                            </Link>

                        </div>

                    </div>

                </div>

            </aside>

        </Fragment>

    );

};
