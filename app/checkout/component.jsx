"use client";
import Nav from "@/app/component/nav";
import { Fragment, useState } from "react";
import { api, print } from "@/public/script/public";

export default function Checkout () {

    const [data, setData] = useState({name: '', email: '', phone1: '', phone2: '', address: '', coupon: ''});
    const [status, setStatus] = useState('now');

    const pay_now = () => {

    }
    const pay_later = () => {
        print(data);
    }

    return (

        <Fragment>

            <Nav single />

            <div className="container">

                <div className="checkout">

                    <div className="details">

                        <div className="border bg-white rounded-md shadow-md overflow-hidden no-select">

                            <h1 className="bg-[--main-color] text-white py-[.6rem] px-3 flex items-center gap-2">

                                <svg viewBox="0 0 576 512" width="20px" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M280.37 148.26 96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 
                                        1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 
                                        148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47 488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 
                                        12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 
                                        301l235.22-193.74a12.19 12.19 0 0 1 
                                        15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" className="fill-white">
                                    </path>
                                </svg>

                                <span className="mt-[-1px] mb-[3px]">معلومات التوصيل</span>

                            </h1>

                            <div className="form">

                                <div className="input">

                                    <div className="flex flex-col w-full">

                                        <label>الاسم كامل</label>

                                        <input type="text" value={data.name} onChange={_ => setData({...data, name: _.target.value.trim()})}/>

                                    </div>

                                    <div className="flex flex-col w-full">

                                        <label>البريد الالكتروني</label>

                                        <input type="email" value={data.email} onChange={_ => setData({...data, email: _.target.value.trim()})}/>

                                    </div>

                                </div>

                                <div className="input">

                                    <div className="flex flex-col w-full">

                                        <label>رقم الهاتف 1</label>

                                        <input type="phone" value={data.phone1} onChange={_ => setData({...data, phone1: _.target.value.trim()})}/>

                                    </div>

                                    <div className="flex flex-col w-full max-[800px]:hidden">

                                        <label>رقم الهاتف 2</label>

                                        <input type="phone" value={data.phone2} onChange={_ => setData({...data, phone2: _.target.value.trim()})}/>

                                    </div>

                                </div>

                                <div className="input">

                                    <div className="flex flex-col w-full">

                                        <label>العنوان</label>

                                        <textarea rows="2" value={data.address} onChange={_ => setData({...data, address: _.target.value.trim()})}></textarea>

                                    </div>

                                </div>

                                <div className="input">

                                    <div className="flex flex-col w-full max-[800px]:hidden">

                                        <label>ملاحظات</label>

                                        <textarea rows="2" value={data.notes} onChange={_ => setData({...data, notes: _.target.value.trim()})}></textarea>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="mt-2 border bg-white rounded-md shadow-md overflow-hidden no-select">

                            <h1 className="bg-[--main-color] text-white py-[.6rem] px-3 flex items-center gap-2">

                                <svg className="fill-white" viewBox="0 0 24 24" width="20px" xmlns="http://www.w3.org/2000/svg">
                                    <title/>
                                    <path d="M20.5.305H3.5A3.535,3.535,0,0,0,0,3.805v13a4.5,4.5,0,0,0,3.306,4.174L14.465,23.6a2.929,2.929,0,0,0,2.487-.489A2.863,2.863,0,0,0,18,20.805l0-9.692a4.264,4.264,0,0,0-3.119-4.1L4.056,4.028a.75.75,0,1,1,.4-1.446l3.534.975.012,0H20.5a.75.75,0,1,1,0,1.5H15.265a.25.25,0,0,0-.067.491l.086.024a5.719,5.719,0,0,1,2.9,1.894.254.254,0,0,0,.194.091H20.5a.75.75,0,0,1,0,1.5H19.462a.249.249,0,0,0-.238.327,5.609,5.609,0,0,1,.281,1.731v6.942a.25.25,0,0,0,.25.25H20.5a3.5,3.5,0,0,0,3.5-3.5v-11A3.5,3.5,0,0,0,20.5.305Zm-5,15a2,2,0,1,1-2-2A2,2,0,0,1,15.5,15.305Z"/>
                                </svg>

                                <span className="mt-[-1px] mb-[3px]">طريقة الدفع</span>

                            </h1>

                            {
                                status === "now" ?

                                <div className="form">

                                    <div className="input">

                                        <div className="flex flex-col w-full">

                                            <label>كوبون الخصم</label>

                                            <input type="text" value={data.coupon} onChange={_ => setData({...data, coupon: _.target.value.trim()})}/>

                                        </div>

                                    </div>

                                    <div className="flex-col w-full my-[.5rem] payment">

                                        <label>طريقة الدفع</label>

                                        <div className="w-full flex justify-between items-center mt-3">

                                            <div className="flex justify-start items-center w-full check-input active">

                                                <span className="material-symbols-outlined">radio_button_checked</span>

                                                <p>الدفع الان بكارت الفيزا</p>

                                            </div>

                                            <div className="flex justify-start items-center w-full check-input mr-6" onClick={_ => setStatus('later')}>

                                                <span className="material-symbols-outlined">radio_button_unchecked</span>

                                                <p>الدفع عند الإستلام</p>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="input flex-col news">

                                        <p className="w-full">
                                            سيتم تحصيل المبلغ الإجمالي منك بمجرد تأكيد طلبك .
                                        </p>
                                        
                                        <span className="w-full">
                                            للعميل الحق فى إلغاء أو إستبدال أى منتج لأى سبب وفى أى وقت وإذا تم إلغاء عملية الشراء سوف يتم
                                             إرجاع المبلغ كامل إلى المشترى . بعد إتمام عملية الشراء سيصلك المنتج فى غضون 1 ساعة - 3 أيام .
                                        </span>

                                    </div>

                                    <div className="input">

                                        <div className="flex flex-col w-full">
                                            <button onClick={pay_now}><span className="material-symbols-outlined">lock</span>شراء الان</button>
                                        </div>

                                    </div>

                                </div> :

                                <div className="form">

                                    <div className="input">
    
                                        <div className="flex flex-col w-full">
    
                                            <label>كوبون الخصم</label>
    
                                            <input type="text" value={data.coupon} onChange={_ => setData({...data, coupon: _.target.value.trim()})}/>
    
                                        </div>
    
                                    </div>
    
                                    <div className="flex-col w-full my-[.5rem] payment">

                                        <label>طريقة الدفع</label>

                                        <div className="w-full flex justify-between items-center mt-3">

                                            <div className="flex justify-start items-center w-full check-input" onClick={_ => setStatus('now')}>

                                                <span className="material-symbols-outlined">radio_button_unchecked</span>

                                                <p>الدفع الان بكارت الفيزا</p>

                                            </div>

                                            <div className="flex justify-start items-center w-full check-input mr-6 active">

                                                <span className="material-symbols-outlined">radio_button_checked</span>

                                                <p>الدفع عند الإستلام</p>

                                            </div>

                                        </div>

                                    </div>
    
                                    <div className="input flex-col news">

                                        <p className="w-full">
                                            سيتم تحصيل المبلغ الإجمالي منك بواسطة شركة الشحن عند وصول المنتج إليك .
                                        </p>

                                        <span className="w-full">
                                            يمكن للعميل إلغاء طلب المنتج قبل وصول شركة الشحن إليه .
                                            يمكن للعميل إرجاع المنتج لشركة الشحن بعد فحصه وقبل دفع الأموال .
                                            سيصلك المنتج فى غضون 2 أيام - أسبوع .
                                        </span>

                                    </div>

                                    <div className="input">
    
                                        <div className="flex flex-col w-full">
                                            <button onClick={pay_later}>إنشاء الطلب</button>
                                        </div>
    
                                    </div>
    
                                </div>
                            }

                        </div>

                    </div>

                    <div className="summary">

                        <div className="border bg-white rounded-md shadow-md overflow-hidden no-select">

                            <h1 className="bg-[--main-color] text-white py-[.6rem] px-3 flex items-center gap-2">
                           
                                <svg className="fill-white" width={18} viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M224 464c0 26.51-21.49 48-47.1 48s-47.1-21.49-47.1-48S149.5 416 176 416S224 437.5 224 
                                    464zM569.5 44.73C563.4 36.64 554.1 32 543.1 32H360v102.1l23.03-23.03c9.375-9.375 24.56-9.375 33.94 0s9.375 24.56 0 
                                    33.94l-64 64C348.3 213.7 342.1 216 336 216s-12.28-2.344-16.97-7.031l-64-64c-9.375-9.375-9.375-24.56 0-33.94s24.56-9.375 
                                    33.94 0L312 134.1V32H121.1L119.6 19.51C117.4 8.19 107.5 0 96 0H23.1C10.75 0 0 10.75 0 23.1S10.75 48 23.1 48h52.14l60.28 
                                    316.5C138.6 375.8 148.5 384 160 384H488c13.25 0 24-10.75 24-23.1C512 346.7 501.3 336 488 336H179.9L170.7 288h318.4c14.29 
                                    0 26.84-9.47 30.77-23.21l54.86-191.1C577.5 63.05 575.6 52.83 569.5 44.73zM463.1 416c-26.51 0-47.1 21.49-47.1 48s21.49 48 
                                    47.1 48s47.1-21.49 47.1-48S490.5 416 463.1 416z"/>
                                </svg>

                                <span className="mt-[-1px] mb-[3px]">ملخص الطلب</span>

                            </h1>

                            <div className="form">

                                <div className="w-full flex justify-start items-start">

                                    <div className="image layer">
                                        <img src="/media/header/1.png"/>
                                    </div>

                                    <div className="title">

                                        <h1>ايفون 13 بروماكس</h1>

                                        <h2>اللون : الأحمر</h2>

                                    </div>

                                </div>

                                <div className="about-pro">

                                    <div>

                                        <p>سعر المنتج :</p>

                                        <span>2000.0 جنيه</span>

                                    </div>

                                    <div>

                                        <p>تكلفة الشحن :</p>

                                        <span>50.0 جنيه</span>

                                    </div>

                                </div>

                                <div className="about-pro">

                                    <div>

                                        <p>الكمية :</p>

                                        <div className="counter">

                                            <span className="material-symbols-outlined icon">add</span>

                                            <p>1</p>

                                            <span className="material-symbols-outlined icon">remove</span>

                                        </div>

                                    </div>

                                </div>

                                <div className="about-pro">

                                    <div>

                                        <p>الإجمالي :</p>

                                        <span>2000.0 جنيه</span>

                                    </div>

                                </div>

                                <button>إلغاء الطلب</button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </Fragment>
        

    );

}
