import { createContext } from "react";
import "./App.css";
import CompA from "./components/CompA";

export const ContextA = createContext();
export const ContextB = createContext();

function App() {
  const user = { name: "Sandeep Kumar", email: "abc@gmail.com", value: 10 };

  return (
    <div className="App">
      <ContextA.Provider value={20}>
        <ContextB.Provider value={user}>
          <CompA />
        </ContextB.Provider>
      </ContextA.Provider>
    </div>
  );
}

export default App;
// export { ContextA, ContextB };
