export function Input({ label, id, type, holder, classes }) {
  return (
    <div className={`${classes} flex flex-col my-1`}>
      <label className="text-grayish font-normal" htmlFor={id}>
        {label}
      </label>
      <input className="input" type={type} id={id} placeholder={holder} />
    </div>
  );
}
