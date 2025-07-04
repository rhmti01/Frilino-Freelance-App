/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import BrandLogo from "../../ui/BrandLogo";
import OTPInput from "react-otp-input";
import BackBtn from "../../ui/BackBtn";
import { useMutation } from "@tanstack/react-query";
import { checkOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function CheckOTPForm({ phoneNumber }) {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate()

  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);
      if (user.isActive) {
        // push to panel based on role
        if (user.role ==="OWNER") navigate("/owner") 
        if (user.role ==="FREELANCER") navigate("/freelancer") 
      }else{
        navigate("/complete-profile")
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className=" flex items-center justify-center  w-full h-[100vh] ">
      <div className="flex items-center justify-center flex-row-reverse gap-x-24 relative   ">
        {/* container poster */}
        <div>
          <img
            className="containerImage"
            src="assets/images/Container.png"
            alt=""
          />
        </div>

        {/* form section */}
        <div className="flex flex-col  xl:w-[420px] ">
          {/* back button */}
          <BackBtn />

          {/* brand logo */}
          <div className="w-full">
            <BrandLogo />
          </div>

          {/* get code form */}
          <form onSubmit={checkOtpHandler}>
            <div className=" mt-[70px] flex flex-col items-center ">
              <h1 className="  text-center font-semibold text-[21px] text-blue-900">
                اعتبارسنجی
              </h1>
              <p className=" mt-8 text-secondary-400 font-normal ">
                کد ارسال شده را به{" "}
                <span className=" text-secondary-700 font-medium">
                  ۰۹۱۲۳۴۵۶۷۸۹
                </span>{" "}
                را وارد کنید
              </p>
              <p className=" mt-2 text-secondary-400 font-normal ">
                شماره اشتباه است؟{" "}
                <span className="px-1 inline-flex text-blue-500 cursor-pointer font-medium hover:underline ">
                  اصلاح شماره موبایل
                </span>
              </p>
              {/* otp get code input */}
              <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span></span>}
                renderInput={(props) => <input type="number" {...props} />}
                containerStyle={
                  " flex flex-row-reverse gap-x-2 justify-center mt-16 w-full "
                }
                inputStyle={{
                  width: " 3rem",
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
              <button type="submit" className="sendOTPForm__btn font-medium  ">
                تایید و ادامه
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckOTPForm;
