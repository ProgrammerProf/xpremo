"use client";
import UserAdress from "./UserAdress";
import PaymentInformation from "./PaymentInformation";
import Coupon from "./Coupon";

export default function CheckoutForm() {

    return (

        <form className="w-[58%]  max-[1000px]:mb-10 max-[1000px]:w-full">

            <UserAdress />

            <div>

                <PaymentInformation />

                <Coupon />

            </div>

        </form>

    );

}
