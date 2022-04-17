import React, { useState } from 'react'
import '../styles/App.css';
import { Preview } from './Preview';
const App = () => {
  const [inp, setInp] = useState("hello world");
  const [fon, setFon] = useState(10);
  const [padd, setPadd] = useState(5);

  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.id === "contentInput") {
      setInp(event.target.value);
    } else if (event.target.id === "fontSizeInput") {
      setFon(event.target.value);
    } else {
      setPadd(event.target.value);
    }
  };
  return (
    <div id="main">
      {
        <form>
          <label htmlFor="contentInput">Content: </label>
          <input
            type="text"
            id="contentInput"
            value={inp}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="fontSizeInput">Font: </label>
          <input
            type="number"
            id="fontSizeInput"
            value={fon}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="paddingInput">Padding: </label>
          <input
            type="number"
            id="paddingInput"
            value={padd}
            onChange={handleChange}
          />
          <Preview fontSize={fon + "px"} content={inp} padding={padd + "px"} />
        </form>
      }
    </div>
  );
};


export default App;
