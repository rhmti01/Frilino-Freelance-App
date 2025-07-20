import React from "react";
import BrandLogo from "../ui/BrandLogo";
import ThemeSwitch from "../ui/ThemeSwitch";
import { LoginCurve, User } from "iconsax-reactjs";
import { useNavigate } from "react-router-dom";
import useProfileImage from "../hooks/useProfileImage";
import Logout from "../features/authentication/Logout";

function HomeHeader({ user }) {
  const navigate = useNavigate();
  const { profileImage } = useProfileImage();
  const role = user?.role.toLowerCase();

  return (
    <nav className="  flex justify-center  w-full  bg-secondary-0 dark:bg-dark-900  ">
      <div className="w-full flex justify-between max-w-7xl mx-auto  ">
        <ul className=" w-full flex items-center justify-start gap-x-7  ">
          <li>
            <BrandLogo details={true} scale="scale-60" />
          </li>
          <li>
            <a className=" headerMenu_item ">راهنما</a>
          </li>
          <li>
            <a className=" headerMenu_item ">درباره ما</a>
          </li>
          <li>
            <a className=" headerMenu_item ">تماس با ما</a>
          </li>
        </ul>
        <div className=" flex justify-end items-center gap-x-7 basis-2/5 ">
          <ThemeSwitch />
          {user ? (
            <div className="flex items-center justify-center gap-x-7 ">
              <Logout />
              <UserDatail 
              role={role}
              userName={user.name}
               profileImage={profileImage} />
            </div>
          ) : (
            <button onClick={() => navigate("/auth")} className=" login_btn ">
              <LoginCurve />
              <span className=" inline-flex ">ورود / ثبت نام</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default HomeHeader;

function UserDatail({ userName, profileImage , role }) {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate(`/${role}/dashboard`)}
      className=" userDeatils_btn  "
    >
      <img
        className=" size-8 rounded-full "
        src={profileImage}
        alt="user profile"
      />
      <p className=" tracking-wider font-light mr-1  ">{userName}</p>
    </button>
  );
}
