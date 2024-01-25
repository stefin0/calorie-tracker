import { useEffect, useState } from "react";
import Style from "./Budget.module.css";

function Budget() {
  const [number, setNumber] = useState(() => {
    return JSON.parse(localStorage.getItem("number")) || "0";
  });
  const [input, setInput] = useState();

  function handleSetInput(e) {
    setInput(e.target.value);
  }

  function handleSetNumber() {
    setNumber(input);
  }

  useEffect(() => {
    localStorage.setItem("number", JSON.stringify(number));
  }, [number])

  return (
    <>
      {/* RING */}
      <div
        className={Style.ring}
        style={{
          background: `conic-gradient(black ${number * 3.6}deg, grey 0deg)`,
        }}
      >
        <span className={Style.pValue}>{number}%</span>
      </div>
      <input type="number" onChange={handleSetInput} />
      <button onClick={handleSetNumber}>Confirm</button>
    </>
  );
}

export default Budget;
