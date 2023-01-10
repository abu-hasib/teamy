import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <aside className="h-screen fixed top-0 left-0 w-[75%] bg-red-800 max-sm:w-[40%] lg:left-auto lg:w-[291px]">
        <header>
          <div>
            <div className="brand">Teamify</div>
          </div>
        </header>
      </aside>
      <main className="ml-[291px]">
        <h1>Dashboard</h1>
      </main>
    </div>
  );
}

export default App;
