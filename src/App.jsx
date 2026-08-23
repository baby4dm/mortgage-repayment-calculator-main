import Form from "./components/Form";
import Results from "./components/Results";

function App() {
  return (
    <div className="w-full bg-slate-100 md:p-10  flex items-center justify-center min-h-screen">
      <div className="flex flex-col justify-center bg-white md:rounded-3xl overflow-hidden h-full lg:flex-row lg:items-stretch lg:max-h-151.5 lg:max-w-252">
        <Form />
        <Results />
      </div>
    </div>
  );
}

export default App;
