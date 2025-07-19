import React from "react";
import { DollarCircle, I3Dcube, Notepad2 } from "iconsax-reactjs";
import Stat from "../../ui/Stat"

function Stats({ projects }) {
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.filter((p) => p.status === 2).length;
  const numOfProposals = projects.reduce(
    (acc, curr) => curr.proposals.length + acc,
    0
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 gap-x-7 mt-10 w-3/4 ">
      <Stat
        color="blue"
        icon={<I3Dcube className="size-14" variant="Broken" />}
        title="پروژه ها"
        value={numOfProjects}
      />
      <Stat
        color="green"
        icon={<DollarCircle className="size-14" variant="Broken" />}
        title="پروژه های واگذار شده"
        value={numOfAcceptedProjects}
      />
      <Stat
        color="indigo"
        icon={<Notepad2 className="size-14" variant="Broken" />}
        title="درخواست ها"
        value={numOfProposals}
      />
    </div>
  );
}

export default Stats;
