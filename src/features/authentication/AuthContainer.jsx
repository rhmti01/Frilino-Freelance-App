/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";

function AuthContainer() {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const { isPending: isSendingOtp, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });

  useEffect(() => {
    if (phoneNumber.length == 11) {
      sendOtpHandler();
    }
  }, [phoneNumber]);

  const sendOtpHandler = async (e) => {
    if (e) e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      // toast.success(data.message);
      toast.success("کد تایید ارسال شد!");
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
            phoneNumber={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            setStep={setStep}
            onSubmit={sendOtpHandler}
            isSendingOtp={isSendingOtp}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            onBack={() => setStep(1)}
            phoneNumber={phoneNumber}
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
