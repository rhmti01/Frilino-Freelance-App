/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import BrandLogo from "../../ui/BrandLogo";
import OTPInput from "react-otp-input";
import { useMutation } from "@tanstack/react-query";
import { checkOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../../ui/Loading";
import { enToFaNumber } from "../../utils/enToFaNumber";
import { TbEditCircle } from "react-icons/tb";
import { minuteFormat } from "../../utils/minuteFormat";
import { Button } from "@heroui/button";
import { InputOtp } from "@heroui/react";

function CheckOTPForm({ onBack, phoneNumber, onResendOtp }) {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(90);
  const navigate = useNavigate();
  const isOtpComplete = otp.length === 6;
  const { mutateAsync, isPending } = useMutation({ mutationFn: checkOtp });

  useEffect(() => {
    if (otp.length == 6) {
      checkOtpHandler();
    }
  }, [otp]);

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
      if (!user.isActive) return navigate("/complete-profile");
      //  user profile is not active! ==>
      if (user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار برسی و تایید می باشد!", { icon: "✌🏻" });
        return;
      }
      //user profile is acitve! ==>
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
      if (user.role === "ADMIN") return navigate("/admin");
    } catch (error) {
      toast.error(error?.response?.data?.message || "خطا در اعتبارسنجی کد");
    }
  };

  const buttonText = () => {
    if (isOtpComplete) return "تایید و ادامه";
    if (time > 0)
      return `${enToFaNumber(minuteFormat(time))} تا دریافت مجدد کد`;
    return "دریافت مجدد کد فعال سازی";
  };

  const buttonClass = () => {
    if (time > 0 && !isOtpComplete) return "bg-gray-400/75 cursor-auto";
    return "bg-blue-600 hover:bg-blue-700 cursor-pointer ";
  };

  const isButtonDisabled = () => {
    if (time > 0 && !isOtpComplete) return true;
    return false;
  };

  return (
    <div className="flex items-center justify-center w-full h-[100vh]">
      <div className="flex items-center justify-center relative">
        {/* form section */}
        <div className="flex flex-col xl:w-[420px] -mt-6  ">
          <BrandLogo />

          <form onSubmit={checkOtpHandler}>
            <div className="mt-[70px] flex flex-col items-center">
              <h1 className="pageTitle text-[23px] ">اعتبارسنجی</h1>
              <p className="mt-8 text-secondary-400 font-normal text-[16.5px]">
                کد ارسال شده به{" "}
                <span className="text-secondary-700 dark:text-secondary-300 font-medium">
                  {enToFaNumber(phoneNumber)}
                </span>{" "}
                را وارد کنید
              </p>
              <p
                onClick={onBack}
                className=" text-[16.5px] mt-3 px-1 inline-flex items-center gap-x-1 text-blue-500 cursor-pointer font-medium hover:underline"
              >
                <TbEditCircle />
                ویرایش شماره موبایل
              </p>
              <OTPInput
                shouldAutoFocus={true}
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span></span>}
                renderInput={(props) => <input type="number" {...props} />}
                containerStyle=" text-[#374151] dark:text-dark-0 flex flex-row-reverse gap-x-[5px] justify-center items-center mt-12 w-full  "
                inputStyle={{
                  width: "2.5rem",
                  padding: "0.7rem 0",
                  border: "1px solid #cbd0d6",
                  borderRadius: "0.9rem",
                  fontSize: "16px",
                  fontWeight: "bold",
                  fontFamily: "font-inter",
                  background : "transparent" ,
                }}
              />
              <Button
                size="lg"
                type="button"
                onPress={() => {
                  if (isOtpComplete) {
                    checkOtpHandler();
                  } else if (time === 0) {
                    onResendOtp();
                    setTime(90);
                    setOtp("");
                  }
                }}
                disabled={isButtonDisabled()}
                className={`checkOTPForm__btn  ${buttonClass()}`}
              >
                {isPending ? <Loading /> : buttonText()}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckOTPForm;
