import { useState } from "react";
import ButtonField from "./form/ButtonField";
import { BackgroundColor } from "../constants/ColorConstant";

const ModalCrud = ({ isDisplayModal, title, onOk, isOkLoading, onCancel, children }) => {

  
    return (
      <>
        {
        isDisplayModal && (
          <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white w-2/5 py-6 px-8 rounded-lg relative">
            {/* <button
              onClick={(closeModal)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
              </button> */}
              <h2 className="text-xl font-bold mb-4">{title}</h2>
              {/* <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 p-2 w-full border rounded-md"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                 <textarea id="comment" rows="3" class="mt-1 p-2 w-full border rounded-md" onChange={(e) => setDescription(e.target.value)} value={description} ></textarea>
              </div> */}

              {children}
              <footer className="py-3 flex justify-end" >
              <ButtonField title="Cancel" onClick={() => onCancel()} backgroundColor={BackgroundColor.white} className={'mr-1'} />
              <ButtonField title="Create" onClick={() => onOk()}  isLoading={isOkLoading} className={'ml-1'}/> 
              </footer>
            </div>
          </div>
        )}
      </>
    );
  };
  
  export default ModalCrud;

