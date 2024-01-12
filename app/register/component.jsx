"use client";
import { api, set_session, print } from "@/public/script/public";
import Nav from "@/app/component/nav";
import Footer from "@/app/component/footer";
import { Fragment, useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function Register () {

    const router = useRouter();
    const [data, setData] = useState({name: '', email: '', password1: '', password2: ''});

    const register = async (e) => {

        e.preventDefault();

        if ( data.password1 !== data.password2 ) return alert("خطأ - كلمة المرور غير متطابقة !");

        $(".loader").flex();
        
        let response = await api('register', data);

        print(response)

        $(".loader").fadeOut(200);

        setTimeout(_ => {

            // if ( response.status === "exists" ) return alert("عذرا - هذا المستخدم موجود بالفعل !");

            // if ( !response.status || !response.user ) return alert("خطأ - من فضلك حاول لاحقا !");
        
            return;

            router.replace('/');

            set_session('user', response.user);

        }, 200);

    }

    return (

        <Fragment>

            <Nav single />

            <div className="container">

                <div className="auth-form mb-[4rem] m-auto max-[640px]:w-full no-select">

                    <h1 className="my-[1.5rem]">إنشاء حساب</h1>

                    <form onSubmit={register} className="relative border bg-white px-6 py-7 shadow-lg max-[500px]:border-none max-[500px]:shadow-none log-form">

                        <div className="flex flex-col">

                            <label className="mb-3">الاسم كامل</label>
                            
                            <input className="border py-2 px-3" type="text" value={data.name} onChange={_ => setData({...data, name: _.target.value})} required autoComplete="off"/>
                            
                        </div>

                        <div className="flex flex-col mt-5">

                            <label className="mb-3">البريد الإلكترونى</label>

                            <input className="border py-2 px-3" type="email" value={data.email} onChange={_ => setData({...data, email: _.target.value})} required autoComplete="off"/>

                        </div>

                        <div className="flex flex-col mt-5 mb-8">

                            <label className="mb-3">كلمة المرور</label>
                            
                            <input className="border py-2 px-3" type="password" value={data.password1} onChange={_ => setData({...data, password1: _.target.value})} required autoComplete="off"/>
                            
                        </div>

                        <div className="flex flex-col mt-5 mb-8">

                            <label className="mb-3">تأكيد كلمة المرور</label>

                            <input className="border py-2 px-3" type="password" value={data.password2} onChange={_ => setData({...data, password2: _.target.value})} required autoComplete="off"/>
                            
                        </div>

                        <button className="w-full justify-center flex group transition border hover:opacity-[.8] border-[--main-color] font-bold bg-[--main-color] py-3 text-sm text-white">
                            انشاء حساب
                        </button>

                        <p className="mt-7 mb-2 text-right text-sm">

                            لدى حساب بالفعل ؟ &nbsp;

                            <Link href="/login" className="text-[--main-color] hover:underline">تسجيل دخول</Link>

                        </p>

                        <div className="loader hide"></div>

                    </form>

                </div>

            </div>

            <Footer />

        </Fragment>

    );

};
