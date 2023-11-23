const Row = ({onClick, children}) => {

    return ( 
        <tr className="hover:bg-gray-200 cursor-pointer border-b" onClick={onClick}>
            {children}  
        </tr>
    )

}

export default Row;

export const RowStyle = {
    className: 'px-2 py-2'
}