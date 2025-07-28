import React from "react";
import Stat from "../../ui/Stat";
import { I3Dcube, Notepad2, Profile2User } from "iconsax-reactjs";

function Stats({ users, projects, proposals }) {
  return (
    <div
      className="  grid grid-cols-1 
        ww:grid-cols-2 
        xx:grid-cols-2 
        xg:grid-cols-3 
        gap-y-5 gap-x-5 
        mt-10 w-full max-w-[1000px] ww:mx-0  "
    >
      <Stat
        color="orange"
        icon={<Profile2User className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" variant="Broken" />}
        title="کاربران"
        value={users.length}
      />
      <Stat
        color="blue"
        icon={<I3Dcube className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" variant="Broken" />}
        title="پروژه ها"
        value={projects.length}
      />
      <Stat
        color="indigo"
        icon={<Notepad2 className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" variant="Broken" />}
        title="درخواست ها"
        value={proposals.length}
      />
    </div>
  );
}

export default Stats;
