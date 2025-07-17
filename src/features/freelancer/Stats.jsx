import React from "react";
import { Notepad2, Verify, Wallet1 } from "iconsax-reactjs";
import {numberDivider} from "../../utils/numberDivider"
import Stat from "../../ui/Stat"


function Stats({ proposals }) {
  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter((p) => p.status === 2);
  const balance = acceptedProposals.reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 gap-x-7 mt-10 w-3/4 ">
      <Stat
        color="blue"
        icon={<Notepad2 className="size-14" variant="Broken" />}
        title="درخواست ها"
        value={numOfProposals}
      />
      <Stat
        color="yellow"
        icon={<Verify className="size-14" variant="Broken" />}
        title="درخواست های تایید شده"
        value={acceptedProposals.length}
      />
      <Stat
        color="green"
        icon={<Wallet1 className="size-14" variant="Broken" />}
        title="کیف پول"
        value={numberDivider(balance)}
      />
    </div>
  );
}

export default Stats;
