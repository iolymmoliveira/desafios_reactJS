import { useState } from "react";
import "./styles.css";

type Props = {
  onSearch: Function,
}

export default function SearchBar({ onSearch} : Props) {
  const [text, setText] = useState("");

  function handleChange(event: any) {
    setText(event.target.value);
  }

  function handleResetClick() {
    console.log("Clicou no botão de reset >>> ", text);
    setText("");
    onSearch(text);
  }
  
  function handleSubmit(event: any) {
    event.preventDefault();
    onSearch(text);
    console.log("Clicou no botão submit >>> ", text);
  }

  return (
    <form className="dsc-search-bar-container" onSubmit={handleSubmit}>
      <button type="submit" className="dsc-search-submit">
        🔎︎
      </button>
      <input
        name="text"
        type="text"
        value={text}
        placeholder="Nome do produto"
        onChange={handleChange}
        className="dsc-search-input"
      />
      <button type="button" className="dsc-search-reset" onClick={handleResetClick}>❌</button>
    </form>
  );
}
