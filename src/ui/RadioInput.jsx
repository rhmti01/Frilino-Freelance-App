import { DocumentCode, UserSquare } from "iconsax-reactjs";

function RadioInput({
  label,
  value,
  register,
  name,
  id,
  validationSchema = {},
  watch,
}) {

  return (
    <div className="flex items-center gap-x-3 text-secondary-600  ">
      <input
        className="  cursor-pointer form-radio size-4 font-medium text-primary-900 focus:ring-primary-900 focus:ring-1 rounded-full "
        type="radio"
        name={name}
        id={id}
        value={value}
        {...register(name, validationSchema)}
        checked={watch(name) === value}
      />
      <label htmlFor={id}>{label}</label>
      {/* {value === "OWNER" ? (
        <UserSquare className=" -mx-1 size-5 mb-1" variant="Broken" />
      ) : (
        <  DocumentCode className=" -mx-1 size-5 mb-1" variant="Broken" />
      )} */}
    </div>
  );
}
export default RadioInput;
