export default function Radio({ label, name, value, defaultChecked }) {
  return (
    <label className="group flex items-center gap-4 border border-slate-500 rounded-sm p-4 cursor-pointer has-checked:bg-lime/10 has-checked:border-lime transition-colors hover:border-lime ">
      <input
        defaultChecked={defaultChecked}
        type="radio"
        name={name}
        value={value}
        className="sr-only"
      />
      <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-slate-700 group-has-checked:border-lime">
        <div className="w-3 h-3 bg-transparent rounded-full group-has-checked:bg-lime"></div>
      </div>
      <span className="text-preset-3 text-slate-900">{label}</span>
    </label>
  );
}
