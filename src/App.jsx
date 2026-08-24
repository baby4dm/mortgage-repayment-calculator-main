import { useState } from "react";
import Form from "./components/Form";
import Results from "./components/Results";

function App() {
  const [results, setResults] = useState(null);
  const [formKey, setFormKey] = useState(0);
  function handleResults(result) {
    setResults(result);
  }

  function handleReset() {
    setFormKey((prev) => prev + 1);
  }
  return (
    <div className="w-full bg-slate-100 md:p-10  flex items-center justify-center min-h-screen">
      <div className="flex flex-col justify-center bg-white md:rounded-3xl overflow-hidden h-full lg:flex-row lg:items-stretch lg:max-h-176.25 lg:max-w-252">
        <Form key={formKey} onCalculate={handleResults} onReset={handleReset} />
        <Results results={results} />
      </div>
    </div>
  );
}

export default App;
