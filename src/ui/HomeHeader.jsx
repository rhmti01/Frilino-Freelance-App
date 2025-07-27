import React, { useState } from "react";
import BrandLogo from "../ui/BrandLogo";
import ThemeSwitch from "../ui/ThemeSwitch";
import { Login } from "iconsax-reactjs";
import { useNavigate } from "react-router-dom";
import useProfileImage from "../hooks/useProfileImage";
import Logout from "../features/authentication/Logout";
import {
  ChatBubbleBottomCenterTextIcon,
  LightBulbIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@heroui/button";
import MenuSidebar from "./MenuSidebar";
import HomeMenuSidebar from "./HomeMenuSidebar";
import HeaderItem from "./HeaderItem";

function HomeHeader({ user, isLoading }) {
  const [openSideBar, setOpenSideBar] = useState(false);
  const navigate = useNavigate();
  const { profileImage } = useProfileImage();
  const role = user?.role.toLowerCase();

  return (
    <nav
      className={`  ${
        isLoading ? "blur-sm" : " "
      }   flex justify-center  w-full  bg-secondary-0 
    dark:bg-dark-900 shadow-sm shadow-secondary-200
    dark:shadow-dark-800 xl:px-8 xg:px-7 vv:px-6 xx:pl-7 ww:pl-6 mm:pl-3 z-50 fixed   `}
    >
      <div className="w-full flex justify-between max-w-7xl mx-auto  ">
        <ul className=" xx:basis-[60%] mm:basis-[40%] flex items-center justify-start xl:gap-x-2 xg:gap-x-1 
        ww:py-1.5 mm:py-1 ">
          <li>
            <MenuSidebar
              open={openSideBar}
              changeSideBarStatus={setOpenSideBar}
            >
              <HomeMenuSidebar onClose={()=>setOpenSideBar(false)} />
            </MenuSidebar>
          </li>
          <li className=" ml-8 " >
            <BrandLogo headerType />
          </li>
          <HeaderItem
          className="hidden vv:flex "
            title="راهنما"
            icon={
              <ChatBubbleBottomCenterTextIcon className=" size-5 stroke-2 stroke-current/75 mb-0.5" />
            }
          />
          <HeaderItem
          className="hidden vv:flex "
            title="درباره ما"
            icon={
              <LightBulbIcon className=" size-5 stroke-2 stroke-current/75 mb-0.5 " />
            }
          />
          <HeaderItem
          className="hidden vv:flex "
            title="ارتباط با ما"
            icon={
              <PhoneIcon className=" size-5 stroke-2 stroke-current/75 mb-0.5 " />
            }
          />
        </ul>
        <div className=" xx:basis-[40%] mm:basis-[60%] flex justify-end
         items-center ww:gap-x-3 mm:gap-x-2 xg:gap-x-4 w-full  ">
          <ThemeSwitch />
          {user ? (
            <div className="flex items-center justify-center mm:gap-x-1 
            ww:gap-x-2 xg:gap-x-3  ">
              <Logout />
              <UserDatail
                role={role}
                userName={user.name}
                profileImage={profileImage}
              />
            </div>
          ) : (
            <Button onPress={() => navigate("/auth")} className=" login_btn ">
              <Login />
              <span className="mm:hidden ww:inline-flex ">ورود / ثبت نام</span>
            </Button>
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
        className=" mm:size-10 ww:size-8 rounded-2xl "
        src={profileImage}
        alt="user profile"
      />
      <p className=" mm:hidden ww:inline font-normal mr-1  ">{userName}</p>
    </button>
  );
}

