import React from "react";
import { DollarCircle, I3Dcube, Notepad2 } from "iconsax-reactjs";
import Stat from "../../ui/Stat";

function Stats({ projects }) {
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.filter((p) => p.freelancer).length;
  const numOfProposals = projects.reduce(
    (acc, curr) => curr.proposals.length + acc,
    0
  );

  console.log(projects);

  return (
    <div
      className="  grid grid-cols-1 
        ww:grid-cols-2 
        xx:grid-cols-2 
        xg:grid-cols-3 
        gap-y-3 gap-x-5 
        mt-10 w-full max-w-[1000px] ww:mx-0 pb-10 "
    >
      <Stat
        color="blue"
        icon={
          <I3Dcube
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
            variant="Broken"
          />
        }
        title="پروژه ها"
        value={numOfProjects}
      />
      <Stat
        color="green"
        icon={
          <DollarCircle
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
            variant="Broken"
          />
        }
        title="پروژه های فعال"
        value={numOfAcceptedProjects}
      />
      <Stat
        color="indigo"
        icon={
          <Notepad2
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
            variant="Broken"
          />
        }
        title="درخواست ها"
        value={numOfProposals}
      />
    </div>
  );
}

export default Stats;
