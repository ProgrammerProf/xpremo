"use client";

export default function CheckoutInfo() {

    return (

        <div className="py-6">

            <div className="flex justify-between items-center">

                <h3 className="text-xl">السعر :</h3>

                <span>2000 جنيه</span>

            </div>

            <div className="flex justify-between items-center my-4">

                <h3 className="text-xl">تكلفة التوصيل :</h3>

                <span>120 جنيه </span>

            </div>

            <div className="flex justify-between items-center mt-8 border-t pt-5 mb-5">

                <h3 className="text-2xl font-bold">الاجمالي :</h3>

                <span className="text-xl font-bold">2120 جنيه</span>

            </div>

            <div className="mt-8">

                <button className="shadow w-full justify-center flex group transition border hover:bg-white hover:text-[--main-color] border-[--main-color] font-bold bg-[--main-color] py-2  rounded-[30px] text-sm text-white">
                    انشاء الطلب
                </button>
                
            </div>

        </div>

    );

}
