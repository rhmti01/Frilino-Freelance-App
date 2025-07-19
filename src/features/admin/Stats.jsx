import React from "react";
import Stat from "../../ui/Stat";
import { I3Dcube, Notepad2, Profile2User } from "iconsax-reactjs";

function Stats({ users, projects, proposals }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 gap-x-7 mt-10 w-3/4 ">
      <Stat
        color="orange"
        icon={<Profile2User className="size-14" variant="Broken" />}
        title="تعداد کاربران"
        value={users.length}
      />
      <Stat
        color="blue"
        icon={<I3Dcube className="size-14" variant="Broken" />}
        title="پروژه ها"
        value={projects.length}
      />
      <Stat
        color="indigo"
        icon={<Notepad2 className="size-14" variant="Broken" />}
        title="درخواست ها"
        value={proposals.length}
      />
    </div>
  );
}

export default Stats;
