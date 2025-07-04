/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { ThreeDots } from "react-loader-spinner";

function Loading({ height = "40", width = "40" }) {
  return (
    <ThreeDots
      visible={true}
      height={height}
      width={width}
      color="#23fe"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop : "15px"
      }}
      wrapperClass
    />
  );
}

export default Loading;
