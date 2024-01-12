"use client";

export default function Coupon () {

    return (

        <div className="border bg-white rounded-md shadow-md overflow-hidden">

            <h1 className="bg-[--main-color] text-white p-3">استخدم كوبون الخصم</h1>

            <div className="px-5 pb-10">

                <div className="flex flex-col mt-5">

                    <label htmlFor="email" className="mb-1 text-sm">ادخل رقم الكوبون</label>

                    <input className="shadow border py-2 px-2 rounded-sm text-sm w-full" type="email" name="email" placeholder=" ادخل كوبون الخصم ..." />

                </div>

            </div>
            
        </div>

    );

};
