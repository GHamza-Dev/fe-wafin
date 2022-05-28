import React from "react";
export function TextArea({
  label,
  id,
  name,
  value,
  required,
  onChange,
  holder,
  classes,
}) {
  return (
    <div className="flex flex-col my-1 mt-3">
      <label className="text-grayish font-normal" htmlFor={id}>
        {label}
      </label>
      <textarea
        required={required}
        className="input"
        name={name}
        id={id}
        cols="30"
        rows="5"
        placeholder={holder}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
}
