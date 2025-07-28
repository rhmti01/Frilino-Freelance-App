import React from "react";
import { useProject } from "../features/project/useProject";
import Loading from "../ui/Loading";
import ProposalHeader from "../features/project/ProposalHeader";
import ProposalTable from "../features/project/ProposalTable";

function Project() {
  const { project, isLoading } = useProject();
  console.log(project);
  console.log(project?.proposals);

  return (
    <div className=" flex justify-center items-start mx-auto  bg-secondary-100/50 dark:bg-dark-900/75
    rounded-tr-3xl 2xl:py-7 2xl:pl-7 xl:py-7 xl:pl-5 xx:px-10 ww:px-7 mm:px-5 mt-8 overflow-x-auto w-full  ">
      {isLoading ? (
        <Loading mt="mt-14" size="md" />
      ) : (
        <div className="w-full max-w-7xl  ">
          <ProposalHeader project={project} />
          <div className="w-full overflow-auto ">
            <ProposalTable proposals={project.proposals} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;
