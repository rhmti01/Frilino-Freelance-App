/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import TextField from "../../ui/TextField";
import BrandLogo from "../../ui/BrandLogo";
import BackBtn from "../../ui/BackBtn";
import Loading from "../../ui/Loading";

function SendOTPForm({ onSubmit, isSendingOtp, phoneNumber, onChange }) {
  return (
    <div className=" flex items-center justify-center  w-full h-[100vh] ">
      <div className="flex items-center justify-center relative   ">
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
              value={phoneNumber}
              onChange={onChange}
              name="phoneNumber"
              label="شماره موبایل را وارد کنید"
              type="tel"
              mt="mt-14"
              dir="ltr"
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
