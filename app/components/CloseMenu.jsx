import { useDispatch } from "react-redux";
import { closeMenu } from "../redux/slices/navMenuSlice";
import CloseIcon from "./../icons/CloseIcon"

export default function CloseMenu() {

    const dispatch = useDispatch();
    const handleClick = () => { dispatch(closeMenu()); };

    return (

        <span onClick={() => handleClick()} className="absolute left-10 top-10 cursor-pointer rounded-full">
            <CloseIcon />
        </span>

    );

}
