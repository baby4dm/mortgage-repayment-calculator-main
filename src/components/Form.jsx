import Input from "./Input";
import Radio from "./Radio";

export default function Form() {
  return (
    <form className="w-full flex flex-col gap-6 py-8 px-6 bg-white md:p-10 lg:gap-10 lg:max-w-126">
      <div className="flex flex-col gap-2 items-start md:flex-row md:justify-between md:items-center">
        <h1 className="text-preset-2 text-slate-900">Mortgage Calculator</h1>
        <button className="text-preset-4 text-slate-700 underline underline-offset-3 decoration-1 cursor-pointer">
          Clear All
        </button>
      </div>
      <div className="flex flex-col gap-6">
        <Input label="Mortgage Amount" metric="£" start />
        <div className="flex flex-col gap-6 md:flex-row">
          <Input className="w-1/2" label="Mortgage Term" metric="years" />
          <Input className="w-1/2" label="Interest Rate" metric="%" />
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-preset-4 text-slate-700">Mortgage Type</h2>
          <div className="flex flex-col gap-3">
            <Radio label="Repayment" />
            <Radio label="Interest Only" />
          </div>
        </div>
      </div>
      <button className="flex items-center gap-4 h-14 rounded-full justify-center bg-lime cursor-pointer md:max-w-78.5">
        <svg
          className="fill-slate-900"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M18.75 2.25H5.25a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5Zm-10.5 16.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 18.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 15a1.125 1.125 0 1 1 0-2.25A1.125 1.125 0 0 1 12 15Zm3.75 3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm1.5-5.25a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v3.75Z" />
        </svg>
        <p className="text-preset-3 text-slate-900 ">Calculate Repayments</p>
      </button>
    </form>
  );
}
