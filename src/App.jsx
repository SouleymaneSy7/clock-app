// import { useState } from "react";
import { CurrentlyTimer } from "./components/CurrentlyTimer";
import { Meteo } from "./components/Meteo";
import { MoreDetails } from "./components/MoreDetails";
import { Quotes } from "./components/Quotes";

function App() {
  return (
    <>
      <Quotes />
      <CurrentlyTimer />
      <MoreDetails />
      <Meteo />
    </>
  );
}

export default App;
