import OptionsSection from "./components/OptionsSection";
import Results from "./components/Results";

function App() {
  return (
    <div className="App flex items-center justify-center h-screen w-screen bg-light-grayish-cyan">
      <h2 className="font-space-mono text-2xl tracking-[.30em] text-very-dark-cyan">
        SPLI
        <br />
        TTER
      </h2>
      <main>
        <div className="main-container bg-white rounded-2xl flex">
          <OptionsSection />
          <OptionsSection />
          <OptionsSection />
          <Results />
        </div>
      </main>
    </div>
  );
}

export default App;
