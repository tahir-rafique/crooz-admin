"use client";
import React, { useState } from "react";
import { DatePicker } from "antd";
const Input = ({
  type = "text",
  wrapperClass,
  className,
  inputClass,
  label,
  labelClass,
  onChange,
  name,
  id,
  value,
  placeholder = "Enter here",
  icon,
  maxWidth,
  maxHeight,
  minHeight,
  minWidth,
  height,
  width,
  maxLength,
  error,
  errorMessage,
  disabled = false,
  startDate = 1,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputStyle = {
    height: height,
    minHeight: minHeight,
    maxHeight: maxHeight,
    width: width,
    minWidth: minWidth,
    maxWidth: maxWidth,
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const getInputType = () => {
    if (type === "password") {
      return showPassword ? "text" : "password";
    } else {
      return type;
    }
  };

  const getInputIcon = () => {
    switch (type) {
      case "password":
        return showPassword
          ? "/assets/icons/eye-close.svg"
          : "/assets/icons/eye-open.svg";
      default:
        return icon;
    }
  };

  return (
    <>
      <div
        className={`flex flex-col gap-2 rounded-lg  ${
          error ? "error" : ""
        } ${className}`}
      >
        {label && (
          <label className={`font-medium text-sm text-black  ${labelClass}`}>
            {label}
          </label>
        )}
        {type == "date" ? (
          <DatePicker
            onChange={onChange}
            className={`date-picker ${inputClass}`}
            // disabledDate={disablePastDates}
            popupClassName="date-picker-popup"
            style={inputStyle}
            placeholder={placeholder}
            format="DD/MM/YYYY" // Set format to dd/mm/yyyy
          />
        ) : (
          <div
            className={`input-wrapper relative  h-12 rounded-lg border border-lightGray overflow-hidden ${wrapperClass} ${
              disabled && "bg-black/30"
            }`}
            style={inputStyle}
          >
            <input
              autoComplete="off"
              type={getInputType()}
              id={id}
              name={name}
              value={value}
              onChange={onChange}
              className={`size-full focus-visible:outline-0  px-2 ${inputClass}`}
              disabled={disabled}
              maxLength={maxLength}
              placeholder={placeholder}
            />

            {icon && (
              <img
                src={getInputIcon()}
                alt="icon"
                className="cursor-pointer absolute right-2.5  w-5   top-1/2 -translate-y-1/2"
                onClick={togglePassword}
              />
            )}
          </div>
        )}
        {errorMessage && (
          <p className="extra-small text-xs font-medium text-red-600   ">
            {errorMessage}
          </p>
        )}
      </div>
    </>
  );
};

export default Input;
