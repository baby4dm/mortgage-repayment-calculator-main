import { formatCurrency } from "../util/currencyFormater";

export default function Results({ results }) {
  return (
    <section className="flex flex-col py-8 px-6 gap-4 justify-center items-center bg-slate-900 text-center w-full md:p-10 flex-1 lg:rounded-bl-[80px]">
      {!results && (
        <>
          <img
            className="max-w-48 max-h-48"
            src="./images/illustration-empty.svg"
            alt="Empty"
          />
          <h1 className="text-preset-2 text-white">Results shown here</h1>
          <p className="text-preset-4 text-slate-300">
            Complete the form and click “calculate repayments” to see what your
            monthly repayments would be.
          </p>
        </>
      )}
      {results && (
        <div className="flex flex-col gap-6 items-start text-start lg:gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-preset-2 text-white">Your results</h1>
            <p className="text-preset-4 text-slate-300">
              Your results are shown below based on the information you
              provided. To adjust the results, edit the form and click
              “calculate repayments” again.
            </p>
          </div>

          <div className="bg-lime pt-1 rounded-xl self-center w-full">
            <div className="bg-[#0E2431] rounded-xl px-4 py-6 md:p-8">
              <div className="flex flex-col gap-2 border-b border-slate-300/25 pb-4 md:pb-8">
                <h2 className="text-preset-4 text-slate-300">
                  Your monthly repayments
                </h2>
                <p className="text-preset-1 text-lime">
                  {formatCurrency(results.monthlyPayment)}
                </p>
              </div>
              <div className="flex flex-col gap-2 pt-4 md:pt-8">
                <h2 className="text-preset-4 text-slate-300">
                  Total you'll repay over the term
                </h2>
                <p className="text-preset-2 text-white">
                  {formatCurrency(results.totalPayment)}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
