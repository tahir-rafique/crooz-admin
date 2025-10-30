"use client";
import React from "react";

export default function CustomSelect({
  label,
  options = [],
  value = "",
  onChange = () => {},
  placeholder = "Select an option",
  className = "",
  name,
  id,
  disabled = false,
}) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {/* Label */}
      {label && (
        <label htmlFor={id || name} className="text-sm font-medium ">
          {label}
        </label>
      )}

      {/* Select dropdown */}
      <div className="relative">
        <select
          id={id || name}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`
            w-full
            appearance-none
            rounded-lg
            border border-lightGray
            bg-white
            py-2.5
            h-12
            px-3
            focus:outline-none
            disabled:bg-gray-100
            disabled:cursor-not-allowed
            text-darkGray
          `}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt, index) => (
            <option key={index} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* ▼ dropdown icon */}
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
