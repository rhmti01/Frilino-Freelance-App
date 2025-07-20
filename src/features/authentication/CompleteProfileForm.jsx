import React, { useEffect, useState } from "react";
import TextField from "../../ui/TextField";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import Loading from "../../ui/Loading";
import BackBtn from "../../ui/BackBtn";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import RoleOption from "../../ui/RoleOption";
import { UserSearch } from "iconsax-reactjs";
import useUser from "./useUser";

function CompleteProfileForm() {
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const {data:user} = useUser()
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const { mutateAsync, isPending: isUpdatingProfile } = useMutation({
    mutationFn: completeProfile,
  });

  useEffect(() => {
    if (user?.email) {
      navigate("/", { replace: true });
      toast.error("کاربر گرامی , حساب کاربری شما قبلا تکمیل شده است!");
    }
  }, [user, navigate]);

  const handleRoleChange = (newRole) => {
    setRole(newRole);
  };

  const onCompleteProfile = async (data) => {
    console.log({ ...data, role });

    try {
      const { message, user } = await mutateAsync({ ...data, role });
      toast.success(message);
      //  user profile is not active! ==>
      if (user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار برسی و تایید می باشد!", { icon: "✌🏻" });
        return;
      }
      //user profile is acitve! ==>
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message || "خطا در اعتبارسنجی کد");
    }
  };

  return (
    <div className="mx-auto max-w-7xl flex flex-col w-full ">
      <div className="flex flex-col items-center justify-center w-full h-[100vh] relative  ">
        {/* get {name , email , role} by form inputs */}
        <form
          onSubmit={handleSubmit(onCompleteProfile)}
          className="flex flex-col xl:max-w-sm w-full relative "
        >
          {/* back button */}
          <BackBtn />

          <h1 className="pageTitle text-[24px]">تکمیل حساب کاربری</h1>
          <TextField
            label="نام و نام خانوادگی"
            name="name"
            mt="mt-16"
            dir="rtl"
            register={register}
            errors={errors}
            validationSchema={{
              required: "وارد کردن نام ضروری است",
              pattern: {
                value: /^[آ-ی\s]{4,30}$/,
                message: "نام باید فقط شامل حروف فارسی باشد (۲ تا ۳۰ حرف)",
              },
            }}
          />
          <TextField
            label="ایمیل"
            name="email"
            type="email"
            register={register}
            errors={errors}
            mt="mt-4"
            dir="ltr"
            validationSchema={{
              required: "وارد کردن ایمیل ضروری است",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "فرمت ایمیل معتبر نیست",
              },
            }}
          />
          <div className="roleContainer mt-6">
            <p className="text-secondary-700 dark:text-dark-200 flex items-start gap-x-2">
              <UserSearch size="20" />
              نقش کاربر:
            </p>
            <div className="flex justify-center gap-x-4 mt-2">
              <RoleOption
                role={role}
                selectedRoll="OWNER"
                roleFa="کارفرما"
                onChangeRole={handleRoleChange}
              />
              <RoleOption
                role={role}
                selectedRoll="FREELANCER"
                roleFa="فریلنسر"
                onChangeRole={handleRoleChange}
              />
            </div>
          </div>
          <button
            disabled={isUpdatingProfile}
            type="submit"
            className="completeProfile__btn mt-8"
          >
            {isUpdatingProfile ? <Loading /> : " بروزرسانی اطلاعات"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
