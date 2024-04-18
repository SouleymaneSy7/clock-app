// import { useState } from "react";
import { CurrentlyTimer } from "./components/CurrentlyTimer";
import { MoreDetails } from "./components/MoreDetails";
import { Quotes } from "./components/Quotes";

function App() {
  return (
    <>
      <Quotes />
      <CurrentlyTimer />
      <MoreDetails />
    </>
  );
}

export default App;
