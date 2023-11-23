import ButtonField from "./form/ButtonField";
import { TypeButton } from "../constants/ColorConstant";

const ModalCrud = ({ isDisplayModal, title, onOk, isOkLoading, onCancel, children, titleOk = 'Create', titleCancel = 'Cancel', typeButtonOk }) => {

  
    return (
      <>
        {
        isDisplayModal && (
          <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white w-2/5 py-6 px-8 rounded-lg relative">
              <h2 className="text-xl font-bold mb-4">{title}</h2>

              {children}
              
              <footer className="py-3 flex justify-end" >
              <ButtonField title={titleCancel} onClick={() => onCancel()} type={TypeButton.OUTLINE} className={'mr-1'} />
              <ButtonField title={titleOk} onClick={() => onOk()}  isLoading={isOkLoading}  type={typeButtonOk} className={'ml-1'}/> 
              </footer>
            </div>
          </div>
        )}
      </>
    );
  };
  
  export default ModalCrud;

