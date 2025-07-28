import React from "react";
import RHFSelect from "../../ui/RHFSelect";
import { useForm } from "react-hook-form";
import useChangeProposalStatus from "./useChangeProposalStatus";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loading from "../../ui/Loading";
import toast from "react-hot-toast";
import { Button } from "@heroui/button";

const options = [
  {
    label: "رد شده",
    value: 0,
  },
  {
    label: "در انتظار تایید",
    value: 1,
  },
  {
    label: "تایید شده",
    value: 2,
  },
];

function ChangeProposalStatus({ id, onClose }) {
  const { id: projectId } = useParams();
  const { register, handleSubmit } = useForm();
  const { isUpdating, changeProposalStatus } = useChangeProposalStatus();
  const queryClient = useQueryClient();

  const onSubmit = (data) => {
    changeProposalStatus(
      {
        id: id,
        data
      },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({
            queryKey: ["project", projectId],
          });
        },
        onError : (error)=>{
           toast.error(error.message)
        }
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
        <div className="mt-4">
          <Button
          size=""
            type="submit"
            className=" mm:text-[15px] xx:text-base mm:py-2 xx:py-[10px] w-full bg-blue-600 hover:bg-blue-700
               duration-300 cursor-pointer  text-white rounded-xl "
          >
            {isUpdating ? <Loading /> : "تایید"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ChangeProposalStatus;
