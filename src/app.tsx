import Editor from "./editor.tsx";
import "./global.css";

function App() {
  const focusEditor = () => {
    const editor = document.querySelector(".tiptap") as HTMLElement;
    editor.focus();
    const range = document.createRange();
    range.selectNodeContents(editor);
    range.collapse(false);
    const sel = globalThis.window.getSelection()!;
    sel.removeAllRanges();
    sel.addRange(range);
  };

  return (
    <main className="h-screen flex flex-col">
      <Editor />
      <div className="flex-1 hover:cursor-text" onClick={() => focusEditor()}>
      </div>
    </main>
  );
}

export default App;
