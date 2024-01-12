"use client";
import WalletIcon from "../../icons/WalletIcon";

export default function PaymentInformation () {

    return (

        <div className="border bg-white rounded-md shadow-md overflow-hidden">

            <h1 className="bg-[--main-color] text-white p-3 flex items-center gap-2">

                <WalletIcon className={"fill-white"}/>

                طريقة الدفع

            </h1>

            <div className="px-5 py-5">

                <div className="flex gap-2 mb-4">

                    <input className="accent-red-500" name="payment" id="cashPay" type="radio"/>
                    
                    <label htmlFor="cashPay">الدفع كاش عن الاستلام</label>

                </div>

                <div className="flex gap-2">

                    <input className="accent-red-500" name="payment" id="onlinePay" type="radio"/>

                    <label htmlFor="onlinePay">ادفع اونلاين بالكارت</label>

                </div>
                
            </div>

        </div>

    );

};
