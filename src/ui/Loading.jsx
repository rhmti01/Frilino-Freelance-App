/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { CircularProgress } from "@mui/joy";
import React from "react";

function Loading({mt , mb}) {
  return (
    <div className={`  ${mt} ${mb}  flex justify-center  `}  >
      <CircularProgress
        color="primary"
        determinate={false}
        size="sm"
        value={34}
        variant="soft"
      />
    </div>
  );
}

export default Loading;
