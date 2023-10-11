import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Select from "react-select";

const UserModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="w-96 text-[#324063] bg-[#FFFFFF] rounded p-5">
        <div className="flex justify-between items-center">
          <div className="relative my-6"></div>

          <div className="absolute inset-y-0 right-0 flex items-center z-20">
            <Select
              id="long-value-select"
              instanceId="long-value-select"
              className="form-select appearance-none
                        inline-block
                        text-base
                        font-normal
                        text-gray-700
                        bg-[transparent]
                        border-2 border-[#9BA5AE]
                        py-1
                        transition
                        ease-in-out
                        focus:text-gray-700 focus:bg-white 
                        focus:border-blue focus:outline-none
                        "
              placeholder="Choose action"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserModal;
