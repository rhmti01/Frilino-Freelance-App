import { Button } from "@heroui/button";
import "../index.css";

function RoleOption({ selectedRoll, role, roleFa, onChangeRole }) {
  return (
    <Button
      className={`cursor-pointer mm:px-3.5 xx:px-4 xx:h-[38px] mm:h-9 rounded-lg xx:text-[15px] ${
        role === selectedRoll
          ? "dark:bg-dark-800 dark:ring-dark-700 bg-primary-100 text-blue-600 ring-1 ring-primary-100 shadow-2xl shadow-blue-100 dark:shadow-dark-800 "
          : " dark:bg-dark-700 dark:ring-dark-600 dark:text-dark-100 dark:hover:bg-dark-800 bg-secondary-0 text-secondary-600 ring-1 ring-gray-300 hover:bg-primary-100 hover:text-blue-600 duration-300 "
      }`}
      onPress={() => onChangeRole(selectedRoll)}
    >
      {roleFa}
    </Button>
  );
}

export default RoleOption;
