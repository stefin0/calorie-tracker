import { useEffect, useState } from "react";
import Style from "./Budget.module.css";

function Budget() {
  const [caloriesEaten, setCaloriesEaten] = useState(() => {
    return JSON.parse(localStorage.getItem("caloriesEaten")) || "0";
  });
  const [caloriesTotal, setCaloriesTotal] = useState(() => {
    return JSON.parse(localStorage.getItem("bmr")) || "0";
  });
  const [caloriesRatio, setCaloriesRatio] = useState();
  const [input, setInput] = useState();

  function handleSetInput(e) {
    setInput(e.target.value);
  }

  function handleSetCaloriesEaten() {
    setCaloriesEaten(input);
  }

  useEffect(() => {
    localStorage.setItem("caloriesEaten", JSON.stringify(caloriesEaten));
    setCaloriesRatio((caloriesEaten / caloriesTotal) * 100);
  }, [caloriesEaten])

  return (
    <>
      {/* RING */}
      <div
        className={Style.ring}
        style={{
          background: `conic-gradient(black ${caloriesRatio * 3.6}deg, grey 0deg)`,
        }}
      >
        <span className={Style.pValue}>{caloriesEaten}/{caloriesTotal}</span>
      </div>
      <input type="number" onChange={handleSetInput} />
      <button onClick={handleSetCaloriesEaten}>Set Calories Eaten</button>
    </>
  );
}

export default Budget;
