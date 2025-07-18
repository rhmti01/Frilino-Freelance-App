import "../index.css";

function RoleOption({ selectedRoll, role, roleFa, onChangeRole }) {
  return (
    <button
      className={`cursor-pointer px-4 py-2 rounded-lg ${
        role === selectedRoll
          ? "dark:bg-dark-800 dark:ring-dark-700 bg-primary-100 text-blue-600 ring-1 ring-primary-100 shadow-2xl shadow-blue-100 dark:shadow-dark-800 "
          : " dark:bg-dark-700 dark:ring-dark-600 dark:text-dark-100 dark:hover:bg-dark-800 bg-secondary-0 text-secondary-600 ring-1 ring-gray-300 hover:bg-primary-100 hover:text-blue-600 duration-300 "
      }`}
      onClick={() => onChangeRole(selectedRoll)}
    >
      {roleFa}
    </button>
  );
}

export default RoleOption;
