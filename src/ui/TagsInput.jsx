import { Warning2 } from "iconsax-reactjs";
import React, { useState, useRef } from "react";
const TagsInput = ({
  name,
  tags,
  setTags,
  register,
  error,
  setValue,
  trigger,
  required,
}) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const addTag = (value) => {
    const trimmed = value.trim();
    if (trimmed && !tags.includes(trimmed)) {
      const newTags = [...tags, trimmed];
      setTags(newTags);
      setValue(name, newTags); // ست کردن مقدار به فرم
      trigger(name); // اجرای ولیدیشن
    }
    setInputValue("");
  };

  const removeTag = (indexToRemove) => {
    const newTags = tags.filter((_, index) => index !== indexToRemove);
    setTags(newTags);
    setValue(name, newTags);
    trigger(name);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag(inputValue);
    } else if (e.key === "Backspace" && inputValue === "") {
      removeTag(tags.length - 1);
    }
  };

  return (
    <div className="mt-3">
      <h1 className="p-3 block text-right font-semilight text-secondary-700">
        تگ‌های پروژه {required && <span className=" text-red-500 ">*</span>}
      </h1>

      <div
        onClick={() => inputRef.current?.focus()}
        className="flex flex-wrap items-center gap-2 px-4 py-2 rounded-xl bg-secondary-200/65 cursor-text w-full"
        dir="rtl"
      >
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-primary-100 text-primary-800 px-2 py-1 rounded-2xl flex items-center gap-1 text-[14px]"
          >
            {tag}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                removeTag(index);
              }}
              className="text-primary-600 hover:text-red-500 font-semibold"
              aria-label="حذف تگ"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={4}
                stroke="currentColor"
                className="size-3 stroke-blue-500 cursor-pointer hover:stroke-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </span>
        ))}

        <input
          ref={inputRef}
          type="text"
          className="flex-1 min-w-[80px] bg-transparent outline-none border-none text-secondary-600 font-inter rounded-xl"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          dir="rtl"
        />
      </div>

      {/* نمایش ارور */}
      {error && (
        <span className=" text-error block text-sm mt-2 ">
          <Warning2 className=" size-4 inline ml-2 " variant="Broken" />
          {error}
        </span>
      )}

      {/* این اینپوت پنهان لازمه برای register */}
      <input
        type="hidden"
        {...register(name, {
          validate: (value) =>
            value && value.length > 0 ? true : "حداقل یک تگ وارد کنید",
        })}
      />
    </div>
  );
};

export default TagsInput;
