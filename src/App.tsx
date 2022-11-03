import { useState } from "react";
import { InputBox } from "./components/InputBox";
import { OutputBox } from "./components/OutputBox";
import './styles.css';


function App() {

  const [inputText, setInputText] = useState('');

  return (
    <div>
      <h1 id="appHeader">
        Markdown Live Preview
      </h1>

        <InputBox inputText={inputText} setInput={setInputText} />

        <OutputBox inputText={inputText} />
      
    </div>
  );
}

export default App;
