import "../index.css";

function RoleOption({ selectedRoll, role, roleFa, onChangeRole }) {
  return (
    <a
      className={`cursor-pointer px-4 py-2 rounded-lg ${
        role === selectedRoll
          ? "bg-gray-300 text-secondary-800 ring-2 ring-gray-800"
          : "bg-secondary-0 text-secondary-600 ring-1 ring-gray-300 hover:bg-gray-300 hover:text-secondary-800 duration-300 "
      }`}
      onClick={() => onChangeRole(selectedRoll)}
    >
      {roleFa}
    </a>
  );
}

export default RoleOption;
