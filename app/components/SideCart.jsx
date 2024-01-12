"use client";
import { closeCart, incrementCartItem, decrementCartItem, removeFromCart, setTotal } from "../redux/slices/sideCartSlice";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "./../icons/CloseIcon";
import TrashIcon from "../icons/TrashIcon";
import Link from "next/link";

export default function SideCart() {

    const cartIsOpen = useSelector((state) => state.sideCart.isOpen);
    const cartItems = useSelector((state) => state.sideCart.items);
    const TOTAL = useSelector((state) => state.sideCart.TOTAL);
    const dispatch = useDispatch();
    dispatch(setTotal(cartItems.reduce((acc, curr) => { return (acc += curr.quantity * curr.price); }, 0)));

    function handleClick() { dispatch(closeCart()); }
    function handleIncrement(itemId) { dispatch(incrementCartItem(itemId)); }
    function handleDecrement(itemId) { dispatch(decrementCartItem(itemId)); }
    function handleDelete(itemId) { dispatch(removeFromCart(itemId)); }

    return (
        
        <div className={`${cartIsOpen ? "right-0" : "-right-full"} fixed z-50 inset-y-0 transition-all duration-300 flex w-screen max-w-md pl-10 bg-white`}>
        
            <div>

                <div className="w-screen max-w-md h-full">

                    <div className="flex  h-full flex-col shadow-xl">
                        
                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">

                            <div className="flex items-start justify-between">

                                <div className="text-lg font-medium text-gray-900">سلة المشتريات</div>

                                <div onClick={() => handleClick()} className="ml-3 flex h-7 items-center">
                                    <button type="button" className="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
                                        <CloseIcon />
                                    </button>
                                </div>

                            </div>

                            <div className="mt-8">

                                <div className="flow-root">

                                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                                        {
                                            cartItems.map((product) => (

                                                <li key={product.id} className="flex py-6">

                                                    <div className="ml-4 flex flex-1 flex-col">

                                                        <div>

                                                            <div className="flex justify-between text-base font-medium text-gray-900 max-[640px]:text-sm">
                                                           
                                                                <h3><Link href={`/${product.id}`}>{product.name}</Link></h3>
                                                           
                                                                <p className="mr-4 text-left">{product.price} جنيه</p>
                                                          
                                                            </div>

                                                        </div>

                                                        <div className="flex flex-1 items-center justify-between text-sm">

                                                            <div className="text-gray-900 flex  gap-3 items-center">

                                                                <p>الكمية </p>

                                                                <div className="border flex gap-4 items-center rounded-sm px-2 py-1">

                                                                    <button className="text-xl" onClick={() => handleIncrement(product.id)}>+</button>
                                                                    
                                                                    <span className="text-black">{product.quantity}</span>
                                                                    
                                                                    <button className="text-xl" onClick={() => handleDecrement(product.id)}>-</button>
                                                                
                                                                </div>

                                                            </div>

                                                            <div className="flex">

                                                                <button type="button" onClick={() => handleDelete(product.id)} className="font-medium text-[--main-color] flex items-center">
                                                                    <TrashIcon />
                                                                    حذف
                                                                </button>

                                                            </div>

                                                        </div>

                                                    </div>

                                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                        <img src={product.img} width={200} height={200} className="h-full w-full object-cover object-center" alt="_"/>
                                                    </div>

                                                </li>

                                            ))
                                        }
                                    </ul>

                                </div>

                            </div>

                        </div>

                        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">

                            <div className="flex justify-between text-base font-medium text-gray-900">

                                <p>الاجمالي</p>

                                <p>{TOTAL.toFixed(2)} جنيه </p>

                            </div>

                            <p className="mt-0.5 text-sm text-gray-500">
                                لا يشمل الضرائب وتكاليف الشحن
                            </p>

                            <div className="mt-6">
                                <Link href="checkout" className="flex items-center justify-center rounded-md border border-transparent bg-[--main-color] px-6 py-3 text-base font-medium text-white shadow-sm">
                                    شراء الان
                                </Link>
                            </div>

                            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">

                                <p>

                                    <button onClick={() => handleClick()} type="button" className="font-medium text-[--main-color] hover:text-indigo-500">
                                        
                                        تسوق المزيد

                                        <span aria-hidden="true"> &larr;</span>
                                        
                                    </button>

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}
