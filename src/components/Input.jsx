export default function Input({ label, metric, start, className }) {
  return (
    <div className={`flex flex-col gap-2 w-full ${className}`}>
      <label className="text-preset-4 text-slate-700">{label}</label>
      <div className="border border-slate-500 rounded-sm w-full h-12 flex items-center overflow-hidden">
        <span
          className={`${start ? "order-first" : "order-last"} flex items-center justify-center text-preset-3 text-slate-700 bg-slate-100 px-4 py-3 h-full`}
        >
          {metric}
        </span>
        <input className="h-full w-full" type="number" step="any" />
      </div>
    </div>
  );
}
