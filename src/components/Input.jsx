export function Input({
  label,
  id,
  type,
  name,
  value,
  onChange,
  holder,
  classes,
}) {
  return (
    <div className={`${classes} flex flex-col my-1`}>
      <label className="text-grayish font-normal" htmlFor={id}>
        {label}
      </label>
      <input
        className="input"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        id={id}
        placeholder={holder}
        autoComplete="true"
      />
    </div>
  );
}
