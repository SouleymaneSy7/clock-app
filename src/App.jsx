import { Wrapper } from "./components/Wrapper";
import { Footer } from "./components/Footer";

import { ToggleProvider } from "./contexts/ToggleContext";

function App() {
  return (
    <ToggleProvider>
      <main className="container">
        <Wrapper />

        <Footer />
      </main>
    </ToggleProvider>
  );
}

export default App;
