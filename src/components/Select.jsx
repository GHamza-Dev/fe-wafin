import React from "react";
export function Select({ label, id, opts, required }) {
  return (
    <div className="flex flex-col my-1 grow">
      <label htmlFor={id} className="text-grayish font-normal">
        {label}
      </label>
      <select id={id} className="input" required={required}>
        {opts.map((opt, index) => (
          <option value={opt.value} key={index}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
