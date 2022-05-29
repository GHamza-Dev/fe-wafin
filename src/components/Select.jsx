export function Select({
  label,
  id,
  opts,
  value,
  onChange,
  required,
  classes,
}) {
  return (
    <div className={`flex flex-col my-1 grow ${classes}`}>
      <label htmlFor={id} className="text-grayish font-normal">
        {label}
      </label>
      <select
        id={id}
        className="input"
        onChange={onChange}
        value={value}
        required={required}
      >
        {opts.map((opt, index) => (
          <option value={opt.value} key={index}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
