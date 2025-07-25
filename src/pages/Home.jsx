import React from "react";
import useUser from "../features/authentication/useUser";
import HomeHeader from "../ui/HomeHeader";
import HomeBody from "../ui/HomeBody";

function Home() {
  const { data: user , isLoading } = useUser();

  return (
    <div
      className="relative  h-screen  w-full justify-start flex-col
      items-center bg-secondary-100  dark:bg-dark-800/40  "
    >
      <HomeHeader user={user} isLoading={isLoading} />
      <HomeBody />
    </div>
  );
}

export default Home;
