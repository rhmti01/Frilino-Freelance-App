import React from "react";
import useUser from "../features/authentication/useUser";
import BrandLogo from "./BrandLogo";
import { enToFaNumber } from "../utils/enToFaNumber";
import { Edit} from "iconsax-reactjs";
import useProfileImage from "../hooks/useProfileImage";

export default function Sidebar({ children }) {
  const { data, isLoading } = useUser();
  const { name, phoneNumber } = data || {};

  const { profileImage, fileInputRef, triggerFileSelect, handleFileChange } =
    useProfileImage();

  return (
    <div className="  w-full hidden xl:block xl:row-span-2">
      <div className="flex flex-col items-center w-full">
        <div className="mt-2 scale-[60%]">
          <BrandLogo />
        </div>
        <span className="block w-85/100 h-[2px] bg-secondary-200 dark:bg-dark-600 mt"></span>

        {/* user data section */}
        <div
          className={`  ${
            isLoading
              ? "bg-white/10 blur-sm"
              : "bg-secondary-0 dark:bg-dark-900/35  "
          }   relative flex flex-col items-center pt-7 pb-3  w-85/100 mt-7 ring-1 ring-secondary-200 dark:ring-dark-600 rounded-xl      `}
        >
          <div
            className={`    h-full flex justify-around items-center w-full px-3  `}
          >
            {/* عکس پروفایل */}
            <div
              onClick={triggerFileSelect}
              className="size-[52px] rounded-full overflow-hidden cursor-pointer bg-gray-100 dark:bg-dark-800 shrink-0"
            >
              <img
                src={profileImage}
                alt="user-profile"
                className="w-full h-full object-cover ring-0 border-0 "
              />
            </div>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />

            <div className="flex flex-col items-center gap-y-2 pr-1">
              <h2 className="text-[17px] font-medium text-secondary-700 dark:text-secondary-300 ">
                {name}
              </h2>
              <p className="font-medium text-secondary-400 dark:text-secondary-500 ">
                {enToFaNumber(String(phoneNumber))}
              </p>
            </div>

            <Edit
              variant="Broken"
              className="size-6 cursor-pointer text-blue-500"
            />
          </div>

          {/* panel pages links */}
          <ul className="flex flex-col mt-14 w-full px-5 justify-start">
            {children}
          </ul>
        </div>
      </div>
    </div>
  );
}
