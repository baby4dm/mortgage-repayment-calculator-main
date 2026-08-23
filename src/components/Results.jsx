export default function Results({ hasResult }) {
  return (
    !hasResult && (
      <section className="flex flex-col py-8 px-6 gap-4 justify-center items-center bg-slate-900 text-center w-full md:p-10 flex-1 lg:rounded-bl-[80px]">
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
      </section>
    )
  );
}
