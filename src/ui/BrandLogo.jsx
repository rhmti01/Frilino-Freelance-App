import { Trello } from "iconsax-reactjs";
import { useNavigate } from "react-router-dom";

function BrandLogo({
  scale = "scale-100",
  mt = "-mt-1",
  forceShowText = false,
  headerType = false,
}) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/")}
      className={`  ${scale} flex items-center justify-center cursor-pointer
       my-0 py-0 text-blue-600 ${headerType ? "gap-x-2  " : "gap-x-3"}   `}
    >
      <Trello
        className={`  ${
          headerType ? "mm:size-10 xx:size-11 vv:xx:size-12 " : " size-[68px] "
        } my-2 mr-2 vv:mx-0  mt-3 `}
        variant="broken"
      />
      {headerType ? (
        <div
          className={`
      ${forceShowText ? "flex" : "hidden vv:flex"} 
      flex-col items-center justify-start
    `}
        >
          <h1
            className={` ${
              headerType ? "text-[25px] " : "text-[40px]"
            }  brandLogo__text   `}
          >
            فـریـلینـو
          </h1>
          <p
            className={` ${mt} ${
              headerType ? "text-[10px] " : "text-[15px] "
            }  text-secondary-400 font-normal mb-0 pb-0 `}
          >
            اپ جامــع فریـلنــسری
          </p>
        </div>
      ) : (
        <div className={` flex flex-col items-center justify-start    `}>
          <h1
            className={` ${
              headerType ? "text-[25px] " : "text-[40px]"
            }  brandLogo__text   `}
          >
            فـریـلینـو
          </h1>
          <p
            className={` ${mt} ${
              headerType ? "text-[10px] " : "text-[15px] "
            }  text-secondary-400 font-normal mb-0 pb-0 `}
          >
            اپ جامــع فریـلنــسری
          </p>
        </div>
      )}
    </div>
  );
}

export default BrandLogo;
