"use client";
import Link from "next/link";
import { CloseMenu } from ".";
import { sideMenuLinks } from "../constants";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { Fragment } from "react";

export default function NavMenu() {

    const menuOpen = useSelector((state) => state.navMenu.isOpen);

    return (

        <Fragment>

            <AnimatePresence>
                {
                    menuOpen && (
                        <motion.div
                            initial={{ opacity: 0, left: "-100%" }}
                            animate={{ opacity: 1, left: 0 }}
                            exit={{ opacity: 0, left: "-100%" }}
                            transition={{ duration: 0.4 }}
                            className="side-menu-bg"
                        ></motion.div>
                    )
                }
            </AnimatePresence>

            <div className={`transition-all duration-300 max-[550px]:w-full max-[550px]:after:hidden side-menu ${menuOpen ? "open" : ""}`}>

                <div className="max-[550px]:w-full side-bar z-50 overflow-y-auto">

                    <CloseMenu />

                    <div className="py-8 px-5">

                        <p className="logo mb-5 text-[35px] font-bold">
                            <span className="text-[--main-color] text-[40px]">X-</span>Premo
                        </p>

                        <ul>
                            {
                                sideMenuLinks.map((link, i) => (
                                    <li className="text-lg" key={i}>
                                        <Link href={link.href} className="py-3 px-5 w-full block">{link.name}</Link>
                                    </li>
                                ))
                            }
                        </ul>

                    </div>

                </div>

            </div>

        </Fragment>

    );

}
