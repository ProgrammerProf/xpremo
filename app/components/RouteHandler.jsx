"use client";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { closeMenu } from "../redux/slices/navMenuSlice";
import { closeCart } from "../redux/slices/sideCartSlice";
import { useEffect } from "react";

export default function RouteHandler() {
    
    const dispatch = useDispatch();
    const location = usePathname();

    useEffect(() => {
        
        dispatch(closeMenu());

        dispatch(closeCart());

    }, [location, dispatch]);

    return null;

}
