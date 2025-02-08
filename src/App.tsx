import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import "./global.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <main className="mx-2">
      <h1>Welcome to Jadeite</h1>
      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <div className="flex gap-2">
          <input
            id="greet-input"
            className="border p-1"
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Enter a name..."
          />
          <button className="border p-1 hover:cursor-pointer" type="submit">
            Greet
          </button>
        </div>
      </form>
      <p>{greetMsg}</p>
    </main>
  );
}

export default App;
