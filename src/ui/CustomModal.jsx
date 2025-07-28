import React from "react";
import { CloseSquare } from "iconsax-reactjs";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";

function CustomModal({ open, onClose, children, title }) {
  return (
    <Modal
      isOpen={open}
      onOpenChange={onClose}
      placement="center"
      backdrop="blur"
      hideCloseButton={true}
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          },
          exit: {
            y: -20,
            opacity: 0,
            transition: {
              duration: 0.2,
              ease: "easeIn",
            },
          },
        },
      }}
      classNames={{
        backdrop: "bg-secondary-400/50 dark:bg-dark-800/50 backdrop-opacity-40",
      }}
    >
      <ModalContent
        className="duration-300 ease-out
          transition-all  z-50 w-[calc(100vw-3rem)] md:max-w-[500px] max-h-[calc(100vh-2rem)]
           overflow-y-auto mx-auto p-3 bg-secondary-0 dark:bg-dark-900 rounded-xl shadow-lg"
      >
        {(onCloseFn) => (
          <>
            <ModalHeader className=" relative flex justify-between items-start text-secondary-700 dark:text-secondary-200 font-bold">
              <h1 className="pr-3 text-wrap mm:w-60 ww:w-full -mt-1 mm:text-[17px] ww:text-[18px] xx:text-[18.5px] xl:text-xl text-secondary-700 dark:text-secondary-200 font-bold ">
                {title}
              </h1>
              <div
                onClick={onCloseFn}
                className=" absolute top-2 left-2 cursor-pointer ml-auto "
              >
                <CloseSquare variant="Broken" className="size-8 text-red-500" />
              </div>
            </ModalHeader>

            <ModalBody>{children}</ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default CustomModal;
