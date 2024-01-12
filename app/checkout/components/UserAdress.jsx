"use client";
import HomeIcon from "../../icons/HomeIcon";

export default function UserAdress () {

    return (

        <div className="border bg-white rounded-md shadow-md overflow-hidden">

            <h1 className="bg-[--main-color] text-white p-3 flex items-center gap-2">

                <HomeIcon className={"fill-white"}/>

                عنوان الشحن

            </h1>

            <div className="px-5 pb-10">

                <div className="flex flex-col mt-5 w-full">

                    <label htmlFor="email" className="mb-1 text-sm">البريد الالكتروني</label>

                    <input className="shadow border py-2 px-2 rounded-sm text-sm w-full" type="email" name="email" placeholder=" ادخل البريد الالكتروني هنا..."/>
                
                </div>

                <div className="flex flex-col mt-5 w-full">

                    <label htmlFor="name" className="mb-1 text-sm">الاسم</label>

                    <input className="shadow border py-2 px-2 rounded-sm text-sm w-full" type="text" name="name" placeholder=" ادخل الاسم كامل هنا..."/>

                </div>

                <div className="flex flex-col mt-5 w-full">

                    <label htmlFor="adress" className="mb-1 text-sm">العنوان</label>

                    <input className="shadow border py-2 px-2 rounded-sm text-sm w-full" type="text" name="adress" placeholder=" ادخل  العنوان هنا..."/>

                </div>

                <div className="flex flex-col mt-5 w-full">

                    <label htmlFor="phone" className="mb-1 text-sm">رقم الموبايل</label>

                    <input className="shadow border py-2 px-2 rounded-sm text-sm w-full" type="number" name="phone" placeholder=" ادخل  رقم الموبايل هنا..."/>

                </div>

            </div>

        </div>

    );

};
