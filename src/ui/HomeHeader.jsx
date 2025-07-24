import React from "react";
import BrandLogo from "../ui/BrandLogo";
import ThemeSwitch from "../ui/ThemeSwitch";
import { Login, LoginCurve, User } from "iconsax-reactjs";
import { useNavigate } from "react-router-dom";
import useProfileImage from "../hooks/useProfileImage";
import Logout from "../features/authentication/Logout";
import { ChatBubbleBottomCenterIcon, ChatBubbleBottomCenterTextIcon, LightBulbIcon, PhoneIcon } from "@heroicons/react/24/outline";

function HomeHeader({ user }) {
  const navigate = useNavigate();
  const { profileImage } = useProfileImage();
  const role = user?.role.toLowerCase();

  return (
    <nav className="  flex justify-center  w-full  bg-secondary-0 
    dark:bg-dark-900 shadow-2xs shadow-secondary-100
    dark:shadow-dark-800 ">
      <div className="w-full flex justify-between max-w-7xl mx-auto  ">
        <ul className=" w-full flex items-center justify-start gap-x-4 py-1.5 ">
          <li>
            <BrandLogo details={false} scale="scale-60" />
          </li>
          <li>
            <button>
              <div className="flex items-center justify-center hover:bg-blue-100
               hover:text-primary-900 dark:text-secondary-300 dark:hover:bg-dark-700
                rounded-xl px-5 py-2 cursor-pointer gap-x-2 text-secondary-500 ">
                <span className=" headerMenu_item ">راهنما</span>
                <ChatBubbleBottomCenterTextIcon className=" size-5 stroke-2 stroke-current/75 mb-0.5" />
              </div>
            </button>
          </li>
          <li>
            <button>
              <div className="flex items-center justify-center hover:bg-blue-100
               hover:text-primary-900 dark:text-secondary-300 dark:hover:bg-dark-700
                rounded-xl px-5 py-2 cursor-pointer gap-x-2 text-secondary-500 ">
                <span className=" headerMenu_item ">درباره ما</span>
                <LightBulbIcon className=" size-5 stroke-2 stroke-current/75 mb-0.5 " />
              </div>
            </button>
          </li>
          <li>
            <button>
              <div className="flex items-center justify-center hover:bg-blue-100
               hover:text-primary-900 dark:text-secondary-300 dark:hover:bg-dark-700
                rounded-xl px-5 py-2 cursor-pointer gap-x-2 text-secondary-500 ">
                <span className=" headerMenu_item ">ارتباط با ما</span>
                <PhoneIcon className=" size-5 stroke-2 stroke-current/75 mb-0.5 " />
              </div>
            </button>
          </li>
        </ul>
        <div className=" flex justify-end items-center gap-x-4 basis-2/5 ">
          <ThemeSwitch />
          {user ? (
            <div className="flex items-center justify-center gap-x-7 ">
              <Logout />
              <UserDatail
                role={role}
                userName={user.name}
                profileImage={profileImage}
              />
            </div>
          ) : (
            <button onClick={() => navigate("/auth")} className=" login_btn ">
              <Login />
              <span className=" inline-flex ">ورود / ثبت نام</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default HomeHeader;

function UserDatail({ userName, profileImage, role }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(`/${role}/dashboard`)}
      className=" userDetails_btn  "
    >
      <img
        className=" size-8 rounded-2xl "
        src={profileImage}
        alt="user profile"
      />
      <p className=" font-normal mr-1  ">{userName}</p>
    </button>
  );
}
