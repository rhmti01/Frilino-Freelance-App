import React from "react";
import FilterDropDown from "../../../ui/FilterDropDown";
import useCategories from "../../../hooks/useCategories";
import FilterTabs from "../../../ui/FilterTabs";

const sortOptions = [
  {
    value: "default",
    label: "مرتب سازی",
  },
  {
    value: "earliest",
    label: "جدیدترین",
  },
  {
    value: "latest",
    label: "قدیمی ترین",
  },
];

const statusOptions = [
  {
    value: "ALL",
    label: "همه",
  },
  {
    value: "OPEN",
    label: "باز",
  },
  {
    value: "CLOSED",
    label: "بسته",
  },
];

function ProjectsHeader() {
  const { transformedCategories } = useCategories();

  return (
    <div className=" mm:flex-col mm:gap-y-3 xx:flex-row flex w-full xx:justify-between xx:items-center bg-blue-100/  ">
      <h1 className=" font-bold text-secondary-800 dark:text-secondary-100
       mm:text-[19.5px] ww:text-[20px] xl:text-[21px] mm:mr-2 xx:mr-0 ">
        لیست پروژه ها
      </h1>
      <div className=" mm:flex-col mm:gap-y-3 mm:px-2 ww:px-0  ww:flex-row  w-full items-center gg:basis-[65%] xg:basis-[58%] 
      xl:basis-[70%] xl:max-w-[650px] xx:basis-[70%] flex justify-end gg:gap-x-3 xg:gap-x-5 xl:gap-x-7
       bg-blue-600/ xl:mt-0 mt-2 xx:gap-x-3 nn:gap-x-3 ww:gap-x-2 ww:basis-full mm:pl-1 xx:pl-0 ">
        <FilterTabs filterField="status" options={statusOptions} />
        <FilterDropDown
          filterField="category"
          options={[
            {
              value: "ALL",
              label: "دسته بندی ",
            },
            ...transformedCategories,
          ]}
        />
        <FilterDropDown filterField="sort" options={sortOptions} />
      </div>
    </div>
  );
}

export default ProjectsHeader;
