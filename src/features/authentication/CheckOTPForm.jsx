/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import BrandLogo from "../../ui/BrandLogo";
import OTPInput from "react-otp-input";
import BackBtn from "../../ui/BackBtn";
import { useMutation } from "@tanstack/react-query";
import { checkOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function CheckOTPForm({ onBack, phoneNumber, onResendOtp }) {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(90);
  const navigate = useNavigate();
  const isOtpComplete = otp.length === 6;
  const { mutateAsync } = useMutation({ mutationFn: checkOtp });


  useEffect(() => {
    const timer =
      time > 0 &&
      setInterval(() => {
        setTime((s) => s - 1);
      }, 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);


  const checkOtpHandler = async (e) => {
    if (e) e.preventDefault();
    if (!isOtpComplete) return;

    try {
      const { message, user } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);
      if (user.isActive) {
        // if (user.role === "OWNER") navigate("/owner");
        // else if (user.role === "FREELANCER") navigate("/freelancer");
      } else {
        navigate("/complete-profile");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "خطا در اعتبارسنجی کد");
    }
  };


  const buttonText = () => {
    if (isOtpComplete) return "تایید و ادامه";
    if (time > 0) return `${time} ثانیه تا دریافت مجدد کد`;
    return "دریافت مجدد کد فعال سازی";
  };


  const buttonClass = () => {
    if (time > 0 && !isOtpComplete) return "bg-secondary-400";
    return "bg-blue-600 hover:bg-blue-700";
  };


  const isButtonDisabled = () => {
    if (time > 0 && !isOtpComplete) return true;
    return false;
  };

  
  return (
    <div className="flex items-center justify-center w-full h-[100vh]">
      <div className="flex items-center justify-center flex-row-reverse gap-x-24 relative">
        {/* container poster */}
        <div>
          <img
            className="containerImage"
            src="assets/images/Container.png"
            alt=""
          />
        </div>

        {/* form section */}
        <div className="flex flex-col xl:w-[420px]">
          <BrandLogo />

          <form onSubmit={checkOtpHandler}>
            <div className="mt-[70px] flex flex-col items-center">
              <h1 className="text-center font-semibold text-[21px] text-blue-900">
                اعتبارسنجی
              </h1>
              <p className="mt-8 text-secondary-400 font-normal">
                کد ارسال شده به{" "}
                <span className="text-secondary-700 font-medium">
                  {phoneNumber}
                </span>{" "}
                را وارد کنید
              </p>
              <p
                onClick={onBack}
                className="mt-3 px-1 inline-flex text-blue-500 cursor-pointer font-medium hover:underline"
              >
                ویرایش شماره موبایل
              </p>

              <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span></span>}
                renderInput={(props) => <input type="number" {...props} />}
                containerStyle="flex flex-row-reverse gap-x-2 justify-center mt-12 w-full"
                inputStyle={{
                  width: "3rem",
                  padding: "0.6rem 0.4rem",
                  border: "1px solid #AECEFF",
                  borderRadius: "0.9rem",
                  color: "#374151",
                  fontSize: "18px",
                  background: "#F2F8FF",
                  outline: "none",
                  marginBottom: "15px",
                }}
              />

              <button
                type="button"
                onClick={() => {
                  if (isOtpComplete) {
                    checkOtpHandler();
                  } else if (time === 0) {
                    onResendOtp();
                    setTime(90);
                    setOtp("");
                  }
                }}
                disabled={isButtonDisabled()}
                className={`checkOTPForm__btn ${buttonClass()}`}
              >
                {buttonText()}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckOTPForm;
