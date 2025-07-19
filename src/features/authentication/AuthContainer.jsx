/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useUser from "./useUser";
import { useNavigate } from "react-router-dom";

function AuthContainer() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const { data:user } = useUser();
  console.log(user);

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user , navigate]);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const { isPending: isSendingOtp, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (data) => {
    try {
      const { message } = await mutateAsync(data);
      // console.log(message);
      toast.success("کد تایید ارسال شد");
      setStep(2);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            setStep={setStep}
            onSubmit={handleSubmit(sendOtpHandler)}
            isSendingOtp={isSendingOtp}
            register={register}
            errors={errors}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            onBack={() => setStep(1)}
            phoneNumber={getValues("phoneNumber")}
            onResendOtp={sendOtpHandler}
          />
        );
      default:
        return null;
    }
  };

  return <div>{renderStep()}</div>;
}

export default AuthContainer;
