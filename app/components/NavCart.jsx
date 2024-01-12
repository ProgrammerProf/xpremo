"use client";
import { useDispatch, useSelector } from "react-redux";
import { openCart } from "../redux/slices/sideCartSlice";
import CartIcon from "../icons/CartIcon";

export default function NavCart() {

    const dispatch = useDispatch();
    const TOTAL = useSelector((state) => state.sideCart.TOTAL);
    const cartItemsCount = useSelector((state) => state.sideCart.items).length;
    const handleClick = () => { dispatch(openCart()); }

    return (

        <div className="cart-logo flex">

            <div className="price-cart">
                <p>السلة : </p>
                <p><span>{TOTAL.toFixed(2)}</span> جنيه</p>
            </div>

            <div onClick={() => handleClick()} className="group cartCount relative h-[50px] w-[50px] border border-[#bfbfbfc2] mr-4 rounded-full flex justify-center hover:bg-black cursor-pointer">
                
                <span className="count-item absolute top-[-10px] text-sm left-[-5px] w-[25px] h-[25px] bg-[--main-color] leading-[25px] text-white text-center rounded-full">
                    {cartItemsCount}
                </span>

                <CartIcon className="transition-colors duration-300 group-hover:fill-white"/>

            </div>

        </div>

    );

}
