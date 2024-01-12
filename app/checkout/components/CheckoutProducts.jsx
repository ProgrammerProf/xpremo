"use client";

export default function CheckoutProducts() {

    return (

        <div className="item flex justify-between border-b py-4">

            <div className=" flex items-center">

                <div className="flex justify-between">

                    <div className="w-28 ml-4">
                        <img className="w-full" src="https://res.cloudinary.com/dbre6azp4/image/upload/v1694349332/as7f6peoga7ymsluh7rv.webp"/>
                    </div>

                    <div>

                        <h4 className="font-bold mb-2">ايفون 13 برو ماكس</h4>

                        <h5 className="mb-2">اللون : الأحمر</h5>

                        <h5>الكمية : 6</h5>

                    </div>

                </div>

            </div>

            <div>

                <h4 className="price text-lg font-bold mb-2">5750 جنيه</h4>

            </div>

        </div>

    );

}
