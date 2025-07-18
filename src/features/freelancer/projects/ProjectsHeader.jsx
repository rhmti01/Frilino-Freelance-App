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
    <div className="flex w-full justify-between items-center bg-amber-100/ ">
      <h1 className=" font-bold text-secondary-800 dark:text-secondary-100 text-[21px] ">
        لیست پروژه ها
      </h1>
      <div className=" w-full items-center basis-[60%] flex justify-end gap-x-7 bg-blue-600/ ">
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
