import React from "react";
import { CircularProgress } from "@mui/joy";

function Loading({mt = "" , mb = " " , size = "sm" , variant = "soft" , }) {
  return (
    <div className={`  ${mt} ${mb}  flex justify-center  `}  >
      <CircularProgress
        color="primary"
        determinate={false}
        size={size}
        value={34}
        variant={variant}
      />
    </div>
  );
}

export default Loading;
