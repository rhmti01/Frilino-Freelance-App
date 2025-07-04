/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import TextField from "../../ui/TextField";
import BrandLogo from "../../ui/BrandLogo";
import BackBtn from "../../ui/BackBtn";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";

function SendOTPForm({ setStep , phoneNumber , onChange }) {

  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      // toast.success(` کد تایید برای شماره موبایل ${phoneNumber} ارسال شد! `)
      toast.success(data.message)
      toast.success("کد تایید ارسال شد!");
      setStep(2);
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
          <form onSubmit={sendOtpHandler}>
            {/* form input and text */}
            <h2 className=" mt-[70px] text-center font-semibold text-[21px] text-blue-900 ">
              ورود | ثبت نام
            </h2>
            <TextField
              value={phoneNumber}
              onChange={onChange}
              name="phoneNumber"
              label="شماره موبایل را وارد کنید"
            />
            {isPending ? (
              <Loading width="60" height="60" />
            ) : (
               <button type="submit" className="sendOTPForm__btn ">تایید و دریافت کد</button>
            )}
           
            <p className="text-[15px] mt-6 text-secondary-500  ">
              ورود شما به معنای پذیرش{" "}
              <span className="highlightText">شرایط فریلینو</span> و{" "}
              <span className="highlightText">قوانین حریم خصوصی</span> است
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SendOTPForm;
