import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiFillExclamationCircle } from "react-icons/ai";
import { BsFillInfoCircleFill, BsFillCheckCircleFill } from "react-icons/bs";

import PropTypes from "prop-types";

const Model = ({
  opened,
  title,
  text,
  status,
  confirm,
  cancel,
  onConfirm,
  onCancel,
}) => {
  const [open, setOpen] = useState(opened);

  const cancelButtonRef = useRef(null);

  const iconSize = 38;
  let btnStatus = "focus:ring-red-500 bg-red-600 hover:bg-red-700";

  if (status === "success")
    btnStatus = "focus:ring-green-500 bg-green-600 hover:bg-green-700";
  else if (status === "info") btnStatus = "focus:ring-blue bg-blue";

  useEffect(() => {
    setOpen(opened);
  }, [opened]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => {
          setOpen(false);
          onCancel();
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-gray-200 sm:mx-0 sm:h-10 sm:w-10">
                      {status === "success" && (
                        <BsFillCheckCircleFill color="green" size={iconSize} />
                      )}
                      {status === "info" && (
                        <BsFillInfoCircleFill color="#1987CE" size={iconSize} />
                      )}
                      {status === "danger" && (
                        <AiFillExclamationCircle color="red" size={iconSize} />
                      )}
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium text-gray-900"
                      >
                        {title}
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">{text}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2  text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm ${btnStatus}`}
                    onClick={() => {
                      setOpen(false);
                      onConfirm();
                    }}
                  >
                    {confirm}
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => {
                      setOpen(false);
                      onCancel();
                    }}
                    ref={cancelButtonRef}
                  >
                    {cancel}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

Model.prototype = {
  opened: PropTypes.bool,
  title: PropTypes.string,
  text: PropTypes.string,
  statue: PropTypes.string,
  confirm: PropTypes.string,
  cancel: PropTypes.string,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
};

Model.defaultProps = {
  confirm: "Confirmer",
  cancel: "Annuler",
  status: "info",
};

export default Model;
