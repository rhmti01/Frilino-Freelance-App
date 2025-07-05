import React, { useState } from "react";
import TextField from "../../ui/TextField";
import { TbUserSearch } from "react-icons/tb";
import toast from "react-hot-toast";
import RoleOption from "../../ui/RoleOption";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import Loading from "../../ui/Loading";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState(null);
  const { mutateAsync, isPending: isUpdatingProfile } = useMutation({
    mutationFn: completeProfile,
  });

  const handleRoleChange = (newRole) => {
    setRole(newRole);
  };

  const onCompleteProfile = async (e) => {
    e.preventDefault();

    try {
      const { message, user } = await mutateAsync({ name, email, role });
      console.log(message, user);
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message || "خطا در اعتبارسنجی کد");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-[100vh]">
      <form
        onSubmit={onCompleteProfile}
        className="flex flex-col xl:max-w-sm w-full"
      >
        <h1 className="text-center font-semibold text-[25px] text-blue-900">
          تکمیل حساب کاربری
        </h1>
        <TextField
          mt="mt-16"
          label="نام و نام خانوادگی"
          value={name}
          onChange={(e) => setName(e.target.value)}
          font="font-vazir"
          dir="rtl"
          autoFocus={true}
        />
        <TextField
          mt="mt-4"
          label="ایمیل"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          font="font-inter"
          dir="ltr"
        />
        <div className="roleContainer mt-6">
          <p className="text-secondary-700 flex items-start gap-x-2">
            <TbUserSearch size="20" />
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
  );
}

export default CompleteProfileForm;
