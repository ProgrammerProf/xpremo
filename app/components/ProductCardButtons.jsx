"use client";
import HeartIcon from "../icons/HeartIcon";
import AddToCartIcon from "../icons/AddToCartIcon";
import ShareIcon from "../icons/ShareIcon";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/sideCartSlice";
import { addToFavourites } from "../redux/slices/favouritesSlice";

export default function ProductCardButtons({ itemData }) {

    const dispatch = useDispatch();
    const handleAddToCart = () => { dispatch(addToCart(itemData)); };
    const handleAddToFavourites = () => { dispatch(addToFavourites(itemData)); };

    return (

        <div className="icons flex z-20 flex-col gap-2 absolute -right-16 group-hover:right-4 top-2/4 -translate-y-1/2">

            <button onClick={() => handleAddToFavourites()} className="group/edit hover:bg-[--main-color] rounded-full relative w-12 h-12 bg-slate-200">
                <HeartIcon className="absolute stroke-2 stroke-[--main-color] group-hover/edit:stroke-white left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 group-hover/edit:fill-[#fff] fill-[--main-color]"/>
            </button>

            <button onClick={() => handleAddToCart()} className={`group/edit hover:bg-[--main-color] rounded-full relative w-12 h-12 bg-slate-200`}>
                <AddToCartIcon className="absolute left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 group-hover/edit:fill-[#fff] fill-[--main-color]"/>
            </button>

            <button className="group/edit hover:bg-[--main-color] rounded-full relative w-12 h-12 bg-slate-200">
                <ShareIcon className="absolute left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 group-hover/edit:fill-[#fff] fill-[--main-color]"/>
            </button>
            
        </div>

    );

}
