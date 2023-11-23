
import { TypeButton } from "../../constants/ColorConstant";
import Spinner from "../Spinner";

const ButtonField = ({ title, onClick, isLoading, width, className, type = TypeButton.PRIMARY}) => {



    return (
        <button className={`text-center ${width !== undefined ? width: '' } 
        ${type}
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