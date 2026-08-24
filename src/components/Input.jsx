import { useEffect, useState } from "react";

export default function Input({
  label,
  metric,
  start,
  className,
  name,
  defaultValue,
  error: externalError,
}) {
  const [error, setError] = useState(externalError);
  const [prevExternalError, setPrevExternalError] = useState(externalError);

  if (externalError !== prevExternalError) {
    setPrevExternalError(externalError);
    setError(externalError);
  }
  function handleInput() {
    if (error) {
      setError(null);
    }
  }
  return (
    <div className={`flex flex-col gap-2 w-full ${className}`}>
      <label className="text-preset-4 text-slate-700">{label}</label>
      <div
        className={`group border ${error ? "border-red" : " border-slate-500 hover:border-slate-900"} rounded-sm w-full h-12 flex items-center overflow-hidden focus-within:border-lime`}
      >
        <span
          className={`group ${start ? "order-first" : "order-last"} flex items-center justify-center text-preset-3 ${error ? "bg-red text-white" : "bg-slate-100 text-slate-700"} px-4 py-3 h-full group-focus-within:bg-lime group-focus-within:text-slate-900`}
        >
          {metric}
        </span>
        <input
          onInput={handleInput}
          defaultValue={defaultValue}
          name={name}
          className="h-full w-full p-4 text-preset-3 text-slate-900 outline-none"
          type="number"
          step="any"
        />
      </div>
      {error && <p className="text-preset-5 text-red">{error}</p>}
    </div>
  );
}
