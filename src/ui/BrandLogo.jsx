/* eslint-disable no-unused-vars */
import React from "react";
import { HiLightBulb } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function BrandLogo({scale = "scale-100"}) {
  const navigate = useNavigate()
  
  return (
    <div onClick={()=>navigate("/")} className={`  ${scale} flex flex-col items-center cursor-pointer  `}  >
      <h1 className=" brandLogo__text ">
        <HiLightBulb size={40} className=" mb-1.5 " />
        فریـلینو
      </h1>
      <p className="text-[15px] text-secondary-400 font-normal mr-2.5 ">اپ جامــع فریـــلنــسری</p>
    </div>
  );
}

export default BrandLogo;
