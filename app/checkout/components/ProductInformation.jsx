import CheckoutProducts from "./CheckoutProducts";
import CheckoutInfo from "./CheckoutInfo";

export default function ProductInformation () {

    return (

        <div>

            <div className="rounded-lg border border-[--maine-color] py-4 px-6 bg-white w-screen max-w-md">

                <div className="top-sec">

                    <h3 className="text-2xl font-bold pb-4 border-b border-gray-300">ملخص الطلب</h3>

                </div>

                <CheckoutProducts />

                <CheckoutInfo />

            </div>

        </div>
        
    );

};
