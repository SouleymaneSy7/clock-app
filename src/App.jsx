import { CurrentlyTimer } from "./components/CurrentlyTimer";
import { ExpandButton } from "./components/ExpandButton";
import { Meteo } from "./components/Meteo";
import { MoreDetails } from "./components/MoreDetails";
import { Quotes } from "./components/Quotes";

function App() {
  return (
    <>
      <main className="container">
        <header className="header-container">
          <Quotes />
          <Meteo />
        </header>

        <section className="main-container">
          <CurrentlyTimer />
          <ExpandButton />
        </section>

        <footer className="footer-container">
          <MoreDetails />
        </footer>
      </main>
    </>
  );
}

export default App;
