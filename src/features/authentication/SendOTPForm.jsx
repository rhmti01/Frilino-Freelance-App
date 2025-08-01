/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import TextField from "../../ui/TextField";
import BrandLogo from "../../ui/BrandLogo";
import BackBtn from "../../ui/BackBtn";
import Loading from "../../ui/Loading";
import { useNavigate } from "react-router-dom";
import useUser from "./useUser";
import toast from "react-hot-toast";
import { Button } from "@heroui/button";

function SendOTPForm({ onSubmit, isSendingOtp, register, errors }) {
  const navigate = useNavigate()
  const {data:user } = useUser()
   
  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
      toast.error("برای ورود با حساب دیگر، ابتدا از حساب فعلی خود خارج شوید.")
    }
  }, [user, navigate]);

  return (
    <div className=" flex items-center justify-center  w-full h-[100vh] bg-secondary-0 dark:bg-dark-900 ">
      <div className="flex items-center justify-center relative  ">
        {/* form section */}
        <div className="relative flex flex-col  xl:w-[420px] ">
          {/* back button */}
          <BackBtn right=" mm:-top-12 xx:-top-14 mm:right-6 ww:right-0 xx:-right-16 xl:-right-32" to={"/"} />

          {/* brand logo */}
          <div className="w-full">
            <BrandLogo scale=" mm:scale-[75%] xx:scale-[80%] xl:scale-[85%] " />
          </div>
          <form className=" flex flex-col mm:w-[93%] uu:w-full  justify-center mx-auto " onSubmit={onSubmit}>
            {/* form input and text */}
            <h2 className=" mt-[70px] mm:text-[19.5px] xx:text-[21px] xl:text-[23px] pageTitle ">
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
            <Button type="submit" size="" className="sendOTPForm__btn ">
              {isSendingOtp ? <Loading /> : " تایید و دریافت کد"}
            </Button>
            <p className=" mm:text-[12.5px] xl:text-[14px] mm:mt-4 xx:mt-5 xl:mt-6 text-secondary-500 text-center ">
              ورود شما به معنای پذیرش{" "}
              <span className="highlightText">شرایط فریلینو</span> و{" "}
              <span className="highlightText">قوانین حریم خصوصی</span> است.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SendOTPForm;
