import { useToggle } from "../contexts/ToggleContext";
import { CurrentlyTimer } from "./CurrentlyTimer";
import { ExpandButton } from "./ExpandButton";
import { Meteo } from "./Meteo";
import { Quotes } from "./Quotes";

export const Wrapper = () => {
  const toggle = useToggle();

  return (
    <div className={toggle === true ? "wrapper active" : "wrapper"}>
      <header className="header-container">
        <Quotes />
        <Meteo />
      </header>

      <section className="main-container">
        <CurrentlyTimer />
        <ExpandButton />
      </section>
    </div>
  );
};
