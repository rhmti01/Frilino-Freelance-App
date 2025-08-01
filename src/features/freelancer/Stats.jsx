import React from "react";
import { Notepad2, Verify, Wallet1 } from "iconsax-reactjs";
import { numberDivider } from "../../utils/numberDivider";
import Stat from "../../ui/Stat";

function Stats({ proposals }) {
  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter((p) => p.status === 2);
  const balance = acceptedProposals.reduce((sum, p) => sum + p.price, 0);

  return (
    <div
      className="  grid grid-cols-1 
        ww:grid-cols-2 
        xx:grid-cols-2 
        xg:grid-cols-3 
        gap-y-5 gap-x-5 
        mt-10 w-full max-w-[1000px] ww:mx-0 pb-10 "
    >
      <Stat
        color="blue"
        icon={<Notepad2 className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" variant="Broken" />}
        title="درخواست ها"
        value={numOfProposals}
      />
      <Stat
        color="indigo"
        icon={<Verify className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" variant="Broken" />}
        title="پروژه های من"
        value={acceptedProposals.length}
      />
      <Stat
        color="green"
        icon={<Wallet1 className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" variant="Broken" />}
        title="کیف پول"
        value={numberDivider(balance)}
      />
    </div>
  );
}

export default Stats;
