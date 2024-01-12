"use client";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { Navbar, SideCart } from ".";
import { useEffect } from "react";
import RouteHandler from "./RouteHandler";
import { ToastContainer } from "react-toastify";

export default function ProviderWrapper({ children }) {

    const handleScroll = (event) => {

        const nav = document.getElementById("navbar");

        if (event.deltaY < 0) { nav.style.top = `0px`; }

        else if (event.deltaY > 0) { nav.style.top = `-107px`; }

    };
    
    useEffect(() => {

        window.addEventListener("wheel", (e) => handleScroll(e));

        window.removeEventListener("wheel", (e) => handleScroll(e));

    }, []);

    return (

        <Provider store={store}>

            <Navbar />

            <ToastContainer position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={true}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="light"/>

            <SideCart />

            <RouteHandler />

            {children}

        </Provider>

    );

}
