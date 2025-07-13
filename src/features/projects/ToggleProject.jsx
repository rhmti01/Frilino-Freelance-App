import React, { useState } from "react";
import useToggleProjectStatus from "./useToggleProjectStatus";
import Loading from "../../ui/Loading";
import Toggle from "../../ui/Toggle";

function ToggleProject({ project }) {
  const enabled = project.status === "OPEN" ? true : false
  const { isUpdating, toggleProjectStatus } = useToggleProjectStatus();

  const toggleStatus = () => {
    toggleHandler();
  };

  function toggleHandler() {
    const status = project.status === "OPEN" ? "CLOSED" : "OPEN";
    toggleProjectStatus(
      {
        id: project._id,
        data: { status },
      },
    );
  }

  return (
    <div className="flex items-center justify-center">
      {isUpdating ? (
        <Loading />
      ) : (
        <Toggle enabled={enabled} toggleStatus={toggleStatus} />
      )}
    </div>
  );
}

export default ToggleProject;
