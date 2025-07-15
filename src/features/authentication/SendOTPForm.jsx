/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import TextField from "../../ui/TextField";
import BrandLogo from "../../ui/BrandLogo";
import BackBtn from "../../ui/BackBtn";
import Loading from "../../ui/Loading";

function SendOTPForm({ onSubmit, isSendingOtp, register, errors }) {
  
  return (
    <div className=" flex items-center justify-center  w-full h-[100vh] bg-secondary-0 dark:bg-dark-900 ">
      <div className="flex items-center justify-center relative  ">
        {/* form section */}
        <div className="flex flex-col  xl:w-[420px] ">
          {/* back button */}
          <BackBtn />

          {/* brand logo */}
          <div className="w-full">
            <BrandLogo />
          </div>
          <form onSubmit={onSubmit}>
            {/* form input and text */}
            <h2 className=" mt-[70px]  text-[23px] pageTitle ">
              ورود | ثبت نام
            </h2>
            <TextField
              name="phoneNumber"
              label="شماره موبایل را وارد کنید"
              dir="ltr"
              type="tel"
              mt="mt-14"
              register={register}
              required
              errors={errors}
              validationSchema={{
                required: "وارد کردن شماره موبایل ضروری است",
                validate: {
                  validFormat: (value) =>
                    /^09\d{9}$/.test(value) ||
                    "شماره موبایل باید با 09 شروع شود و 11 رقم باشد",
                  notRepeated: (value) =>
                    !/^09(\d)\1{8}$/.test(value) ||
                    "شماره موبایل نباید شامل ارقام تکراری باشد",
                },
              }}
            />
            <button type="submit" className="sendOTPForm__btn ">
              {isSendingOtp ? <Loading /> : " تایید و دریافت کد"}
            </button>
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
