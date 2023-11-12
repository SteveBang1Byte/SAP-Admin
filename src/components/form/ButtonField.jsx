import Spinner from "../Spinner";

const ButtonField = ({ title, onClick, isLoading, width }) => {
    return (
        <button className={`text-base font-medium text-white ${width !== undefined ? width: '' } py-3 px-4 bg-indigo-500 rounded-md disabled:opacity-75`} onClick={onClick} disabled = {isLoading}>
             { isLoading ? <Spinner /> : title }
         </button>
    );

};

export default ButtonField;