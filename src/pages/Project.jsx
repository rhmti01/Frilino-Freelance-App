import React from "react";
import { useProject } from "../features/project/useProject";
import Loading from "../ui/Loading";
import ProposalHeader from "../features/project/ProposalHeader";
import ProposalTable from "../features/project/ProposalTable";

function Project() {
  const { project, isLoading } = useProject();

  return (
    <div className=" w-full flex justify-center items-start mt-10 mm:px-6 ww:px-14 ">
      {isLoading ? (
        <Loading mt="mt-14" size="md" />
      ) : (
        <div className="w-full ">
          <ProposalHeader project={project} />
          <div className="w-full overflow-auto  ">
            <ProposalTable proposals={project.proposals} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;
