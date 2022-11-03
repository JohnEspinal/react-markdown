import { inputBoxProps } from "../interfaces/inputBoxProps";

export const InputBox = ( {inputText, setInput}: inputBoxProps ) => {

    const onInputChange = (event: any) => {

        setInput(event.target.value);

    }

  return (
    <div id="inputBox">
        <span>Writer your markdown code here</span>
        <textarea value={inputText} onChange={onInputChange} />
    </div>
  )
}
