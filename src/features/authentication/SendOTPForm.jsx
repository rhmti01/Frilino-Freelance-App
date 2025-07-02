/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function SendOTPForm() {
  const [number, setNumber] = useState("");
  return (
    <div className=" flex items-center justify-center  w-full h-[100vh] ">
      <div className="flex items-center justify-center gap-x-24 relative   ">
        {/* container poster */}
        <div>
          <img
            className="containerImage"
            src="assets/images/Container.png"
            alt=""
          />
        </div>

        {/* form section */}
        <div className="flex flex-col  ">


          {/* back button */}
          <a className="cursor-pointer absolute top-1 right-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="size-6 stroke-secondary-700 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </a>

          <div className="w-full">
            {/* brand logo */}
            <h1 className=" brandLogo__text ">
              <svg
                className=" size-9 fill-blue-600"
                viewBox="0 0 384 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"></path>
              </svg>
              Frilino
            </h1>
          </div>
          <form>
            {/* form input and text */}
            <h2 className=" mt-[70px] text-center font-semibold text-[21px] text-blue-900 ">
              ورود | ثبت نام
            </h2>
            <h2 className=" mt-6 text-center font-normal text-[17px] text-gray-500 ">
              برای ادامه شماره تماس را وارد کنید
            </h2>
            <div className="numberInput__section ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-gray-500 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              <input
                className=" numberInput__input "
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <button className="sendOTPForm__btn ">تایید و دریافت کد</button>
            <p className=" mt-6 text-secondary-500  ">
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
