"use client";
import { api, set_session, print } from "@/public/script/public";
import Nav from "@/app/component/nav";
import Footer from "@/app/component/footer";
import { Fragment, useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function Login () {

    const router = useRouter();
    const [data, setData] = useState({email: '', password: ''});

    const login = async (e) => {

        e.preventDefault();

        $(".loader").flex();
        
        let response = await api('login', data);

        print(response)

        $(".loader").fadeOut(200);

        setTimeout(_ => {

            // if ( !response.status || !response.user ) return alert("عذرا - هذا المستخدم غير موجود !");

            return;

            router.replace('/');

            set_session('user', response.user);

        }, 200);

    }

    return (

        <Fragment>

            <Nav single register />

            <div className="container">

                <div className="auth-form m-auto mt-[4rem] mb-[6rem] max-[640px]:w-full no-select">

                    <h1 className="my-[1.5rem]">تسجيل الدخول</h1>

                    <form onSubmit={login} className="relative border bg-white px-6 py-7 shadow-lg max-[500px]:border-none max-[500px]:shadow-none log-form">

                        <div className="flex flex-col mt-3">

                            <label className="mb-3">البريد الإلكترونى</label>

                            <input className="border py-2 px-3" type="email" value={data.email} onChange={_ => setData({...data, email: _.target.value})} required autoComplete="off"/>

                        </div>

                        <div className="flex flex-col mt-5 mb-8">

                            <label className="mb-3">كلمة المرور</label>
                            
                            <input className="border py-2 px-3" type="password" value={data.password} onChange={_ => setData({...data, password: _.target.value})} required autoComplete="off"/>
                            
                        </div>

                        <button className="w-full justify-center flex group transition border hover:opacity-[.8] border-[--main-color] font-bold bg-[--main-color] py-3 text-sm text-white">
                            تسجيل الدخول
                        </button>

                        <p className="mt-7 mb-2 text-right text-sm">

                            ليس لدى أى حساب ؟ &nbsp;

                            <Link href="/register" className="text-[--main-color] hover:underline">إنشاء حساب</Link>

                        </p>

                        <div className="loader hide"></div>

                    </form>

                </div>

            </div>

            <Footer />

        </Fragment>

    );

};
