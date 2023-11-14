import { BackgroundColor } from "../../constants/ColorConstant";
import Spinner from "../Spinner";

const ButtonField = ({ title, onClick, isLoading, width, backgroundColor, className}) => {

    const setBackgroundColor = () => {
        if(backgroundColor === undefined){
            return BackgroundColor.primary + ' text-white';
        } else {
            return BackgroundColor.white + ' text-slate-700 border';
        }
    }


    return (
        <button className={`text-base font-medium 
         ${width !== undefined ? width: '' } 
         py-3 px-4 
        ${setBackgroundColor()}
        rounded-md 
        disabled:opacity-75 
        ${className}
        `
        } onClick={onClick} disabled = {isLoading}>
             { isLoading ? <Spinner /> : title }
         </button>
    );

};

export default ButtonField;