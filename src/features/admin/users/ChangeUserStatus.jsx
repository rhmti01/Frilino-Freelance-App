import React from "react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import Loading from "../../../ui/Loading";
import toast from "react-hot-toast";
import { useChangeUserStatus } from "./useChangeUserStatus";
import RHFSelect from "../../../ui/RHFSelect";
import { Button } from "@heroui/button";

const options = [
  {
    label: "در انتظار تایید",
    value: 0,
  },
  {
    label: "رد شده",
    value: 1,
  },
  {
    label: "تایید شده",
    value: 2,
  },
];

function ChangeUserStatus({ userId, onClose }) {
  const { register, handleSubmit } = useForm();
  const { isChanging, changeUserStatus } = useChangeUserStatus();
  const queryClient = useQueryClient();

  const onSubmit = (data) => {
    changeUserStatus(
      { userId, data },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({
            queryKey: ["users"],
          });
        },
        onError: (error) => {
          toast.error(error.message);
        },
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFSelect
          name="status"
          label="تغییر وضعیت"
          register={register}
          required
          options={options}
        />
        <div className="mt-7">
          <Button
            size="lg"
            type="submit"
            className="text-base py-3 w-full bg-blue-600 hover:bg-blue-700
               duration-300 cursor-pointer  text-white rounded-xl "
          >
            {isChanging ? <Loading /> : "تایید"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ChangeUserStatus;
