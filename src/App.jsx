import NumberInputSection from "./components/NumberInputSection";
import ButtonInputSection from "./components/ButtonInputSection";
import Results from "./components/Results";

function App() {
  return (
    <div className="App flex items-center justify-center h-screen w-screen bg-light-grayish-cyan">
      <div className="absolute text-center">
        <h2 className="font-space-mono text-2xl tracking-[.30em] text-dark-grayish-cyan">
          SPLI
          <br />
          TTER
        </h2>
        <main>
          <div className="main-container bg-white rounded-2xl flex relative top-5 p-5 text-left text-sm">
            <div className="flex-col">
              <NumberInputSection
                imageSrc="/images/icon-dollar.svg"
                header="Bill"
              />
              <ButtonInputSection header="Select Tip %" />
              <NumberInputSection
                imageSrc="/images/icon-person.svg"
                header="Number of People"
              />
            </div>
            <Results />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
