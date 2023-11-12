const Label = ({title, size = 'sm'}) => {
    const getSize = (size) =>{
            switch (size) {
                case 'sm':
                    return 'text-sm';
                case 'md':
                    return 'text-base';
                case 'lg':
                    return 'text-lg';
                    case 'xl':
                    return 'text-xl';
                default:
                    return 'text-sm';
            }
            
    };
    return (
        <p className={` ${getSize(size)}
        font-medium pb-2
        `}>{title}</p>
    );
}
 
export default Label;