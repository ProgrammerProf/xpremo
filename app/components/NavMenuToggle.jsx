"use client";
import { useDispatch } from "react-redux";
import { openMenu } from "../redux/slices/navMenuSlice";
import MenuIcon from "./../icons/MenuIcon"

export default function NavMenuToggle() {

    // const menuOpen = useSelector((state) => state.navMenu.isOpen);

    const dispatch = useDispatch();

    const handleClick = () => { dispatch(openMenu()); };

    return (

        <div onClick={() => handleClick()} className="absolute cursor-pointer p-1 max-[1000px]:right-[5%]">
            <MenuIcon />
        </div>
        
    );
    
}
