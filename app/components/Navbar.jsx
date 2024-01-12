import { LoginButton, Logo, NavCart, NavMenu, NavMenuToggle, SearchForm } from ".";
import FavouriteHomeIcon from "./../icons/FavouriteHomeIcon";
import { mainNavLinks } from "../constants";
import Link from "next/link";

export default function Navbar () {

    return (

        <header id="navbar" className="transition-all duration-300 bg-white fixed top-0 left-0 right-0 z-50 shadow-sm max-[640px]:px-5">

            <div className="border-b">

                <div className="container m-auto top-header flex py-[10px] justify-between items-center max-[800px]:flex-wrap">

                    <Link href="/" className="logo text-[35px] font-bold max-[800px]:text-[25px]">
                        <Logo />
                    </Link>

                    <div className="search-box w-[50%] max-[800px]:order-2 max-[800px]:w-[70%] max-[600px]:w-[90%] max-[800px]:mx-auto">
                        <SearchForm />
                    </div>

                    <NavCart />

                </div>

            </div>

            <div className="container m-auto max-[1000px]:py-3 btm-header flex border-b justify-between items-center relative max-[1000px]:justify-end">

                <NavMenuToggle />

                <ul className="mr-16 gap-10 nav-links flex max-[1000px]:hidden">

                    {
                        mainNavLinks.map((link, i) => (

                            <li key={i} className="py-5 px-1 font-bold relative text-sm before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 hover:before:w-full w-max before:h-[3px] before:bg-black">
                                <Link href={link.href} className="py-5">{link.name}</Link>
                            </li>

                        ))
                    }

                </ul>

                <div className="flex gap-4 items-center">

                    <LoginButton />

                    <div>
                        <Link href={"/favourites"} className="group">
                            <FavouriteHomeIcon className="bi bi-house-heart-fill fill-[--main-color]" />
                        </Link>
                    </div>

                </div>

            </div>

            <NavMenu />

        </header>

    );

};
