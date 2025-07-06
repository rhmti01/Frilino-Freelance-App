import "../index.css";

function RoleOption({ selectedRoll, role, roleFa, onChangeRole }) {
  return (
    <a
      className={`cursor-pointer px-4 py-2 rounded-lg ${
        role === selectedRoll
          ? "bg-primary-100 text-blue-600 ring-1 ring-primary-100 shadow-2xl shadow-blue-100 "
          : "bg-secondary-0 text-secondary-600 ring-1 ring-gray-300 hover:bg-primary-100 hover:text-blue-600 duration-300 "
      }`}
      onClick={() => onChangeRole(selectedRoll)}
    >
      {roleFa}
    </a>
  );
}

export default RoleOption;
