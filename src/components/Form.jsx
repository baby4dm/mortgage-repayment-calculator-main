import { useActionState, useEffect } from "react";
import Input from "./Input";
import Radio from "./Radio";

async function calculateAction(prevState, formData) {
  const amount = formData.get("amount");
  const term = formData.get("term");
  const rate = formData.get("rate");
  const type = formData.get("type");

  const errors = {};
  if (!amount) errors.amount = "This field is required";
  if (!term) errors.term = "This field is required";
  if (!rate) errors.rate = "This field is required";
  if (!type) errors.type = "This field is required";

  if (Object.keys(errors).length > 0) {
    return {
      errors,
      values: { amount, term, rate, type },
      result: null,
    };
  }

  const P = parseFloat(amount);
  const r = parseFloat(rate) / 100 / 12;
  const n = parseFloat(term) * 12;

  let monthlyPayment = 0;
  let totalPayment = 0;

  if (type === "repayment") {
    monthlyPayment = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    totalPayment = monthlyPayment * n;
  } else {
    monthlyPayment = (P * parseFloat(rate)) / 100 / 12;
    totalPayment = monthlyPayment * n;
  }

  return {
    errors: {},
    values: { amount, term, rate, type },
    result: {
      monthlyPayment: monthlyPayment.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
    },
  };
}
const initialFormState = {
  errors: {},
  values: { amount: "", term: "", rate: "", type: "" },
  result: null,
};
export default function Form({ onCalculate, onReset }) {
  const [state, formAction] = useActionState(calculateAction, initialFormState);
  useEffect(() => {
    if (state.result) {
      onCalculate(state.result);
    }
  }, [state.result]);
  function handleReset() {
    onReset();
  }
  return (
    <form
      action={formAction}
      className="w-full flex flex-col gap-6 py-8 px-6 bg-white md:p-10 lg:gap-10 lg:max-w-126"
    >
      <div className="flex flex-col gap-2 items-start md:flex-row md:justify-between md:items-center">
        <h1 className="text-preset-2 text-slate-900">Mortgage Calculator</h1>
        <button
          onClick={handleReset}
          type="button"
          className="text-preset-4 text-slate-700 underline underline-offset-3 decoration-1 cursor-pointer hover:text-slate-900"
        >
          Clear All
        </button>
      </div>
      <div className="flex flex-col gap-6">
        <Input
          name="amount"
          defaultValue={state.values?.amount}
          label="Mortgage Amount"
          metric="£"
          start
          error={state.errors?.amount}
        />
        <div className="flex flex-col gap-6 md:flex-row">
          <Input
            name="term"
            defaultValue={state.values?.term}
            className="w-1/2"
            label="Mortgage Term"
            metric="years"
            error={state.errors?.term}
          />
          <Input
            name="rate"
            defaultValue={state.values?.rate}
            className="w-1/2"
            label="Interest Rate"
            metric="%"
            error={state.errors?.rate}
          />
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-preset-4 text-slate-700">Mortgage Type</h2>
          <div className="flex flex-col gap-3">
            <Radio
              name="type"
              value="repayment"
              label="Repayment"
              defaultChecked={state.values?.type === "repayment"}
            />
            <Radio
              name="type"
              value="interest-only"
              label="Interest Only"
              defaultChecked={state.values?.type === "interest-only"}
            />
          </div>
          {state.errors?.type && (
            <p className="text-preset-5 text-red">{state.errors.type}</p>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="flex items-center gap-4 h-14 rounded-full justify-center bg-lime cursor-pointer md:max-w-78.5 hover:bg-lime/50"
      >
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
