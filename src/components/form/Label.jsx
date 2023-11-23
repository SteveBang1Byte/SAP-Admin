const Label = ({title, size = 'sm'}) => {
    const getSize = (size) =>{
            switch (size) {
                case 'sm':
                    return 'text-sm font-medium';
                case 'md':
                    return 'text-base font-medium';
                case 'lg':
                    return 'text-lg font-medium';
                case 'xl':
                    return 'text-2xl font-bold';
                default:
                    return 'text-sm font-medium';
            }
            
    };
    return (
        <p className={` ${getSize(size)} pb-2`}>{title}</p>
    );
}
 
export default Label;