/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import TextField from "../../ui/TextField";
import BrandLogo from "../../ui/BrandLogo";
import BackBtn from "../../ui/BackBtn";
import Loading from "../../ui/Loading";

function SendOTPForm({ onSubmit, isSendingOtp, phoneNumber, onChange }) {
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
          <form onSubmit={onSubmit}>
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
            {isSendingOtp ? (
              <Loading width="60" height="60" />
            ) : (
              <button type="submit" className="sendOTPForm__btn ">
                تایید و دریافت کد
              </button>
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
