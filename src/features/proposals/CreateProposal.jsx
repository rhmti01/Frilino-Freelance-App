import React from "react";
import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";
import useCreateProposal from "./useCreateProsals";
import toast from "react-hot-toast";
import { Button } from "@heroui/button";

function CreateProposal({ onClose, projectId }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { isCreating, createProposal } = useCreateProposal();

  const onSubmit = (data) => {
    createProposal(
      { ...data, projectId },
      {
        onSuccess: () => {
          reset();
          onClose();
        },
        onError : (error) =>{
            toast.error(error?.message)
        }
      }
    );
  };

  return (
    <div className=" w-full flex flex-col ">
      <form onSubmit={handleSubmit(onSubmit)} className="px-1">
        <TextField
          mt="mt-2"
          label="توضیحات "
          name="description"
          register={register}
          required
          errors={errors}
          validationSchema={{
            required: "توضیحات ضروری است",
            minLength: {
              value: 8,
              message: "طول توضیحات کوتاه است",
            },
            maxLength: {
              value: 40,
              message: "طول توضیحات بلند است",
            },
          }}
        />
        <TextField
          label="قیمت پیشنهادی "
          name="price"
          dir="ltr"
          mt="mt-2"
          register={register}
          required
          type="number"
          errors={errors}
          validationSchema={{
            required: "مقدار قیمت پیشنهادی ضروری است",
            minLength: {
              value: 6,
              message: "طول قیمت پیشنهادی کوتاه است",
            },
            maxLength: {
              value: 10,
              message: "طول قیمت پیشنهادی بلند است",
            },
          }}
        />
        <TextField
          label="مدت پیشنهادی (روز)"
          name="duration"
          dir="ltr"
          mt="mt-2"
          type="number"
          register={register}
          required
          errors={errors}
          validationSchema={{
            required: " مدت پیشنهادی ضروری است",
            maxLength: {
              value: 3,
              message: "طول مدت پیشنهادی نامعتبر است",
            },
          }}
        />
        <Button
        size="lg"
          type="submit"
          className=" block text-base py-3.5 w-full bg-blue-600 hover:bg-blue-700
               duration-300 cursor-pointer mt-6 text-white rounded-xl  "
        >
          {/* {isCreating || isEditing ? <Loading /> : "تایید"} */}
          {isCreating ? <Loading /> : "تایید"}
        </Button>
      </form>
    </div>
  );
}

export default CreateProposal;
