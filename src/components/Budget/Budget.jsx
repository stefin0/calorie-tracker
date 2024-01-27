import { useEffect, useState } from "react";
import Style from "./Budget.module.css";
import Modal from "../Modal/Modal";

function Budget() {
  const [caloriesEaten, setCaloriesEaten] = useState(() => {
    return JSON.parse(localStorage.getItem("caloriesEaten")) || "0";
  });
  const [caloriesTotal, setCaloriesTotal] = useState(() => {
    return JSON.parse(localStorage.getItem("bmr")) || "0";
  });
  const [caloriesRatio, setCaloriesRatio] = useState();
  const [input, setInput] = useState();
  const [showModal, setShowModal] = useState(false);

  function handleSetInput(e) {
    setInput(e.target.value);
  }

  function handleSetCaloriesEaten() {
    setCaloriesEaten(input);
  }

  useEffect(() => {
    localStorage.setItem("caloriesEaten", JSON.stringify(caloriesEaten));
    setCaloriesRatio((caloriesEaten / caloriesTotal) * 100);
  }, [caloriesEaten]);

  function handleSetShowModal() {
    setShowModal((prev) => !prev);
  }

  return (
    <>
      {/* RING */}
      <div
        className={Style.ring}
        style={{
          background: `conic-gradient(black ${caloriesRatio * 3.6
            }deg, grey 0deg)`,
        }}
      >
        <span className={Style.pValue}>
          {caloriesEaten}/{caloriesTotal}
        </span>
      </div>
      <input type="number" onChange={handleSetInput} />
      <button onClick={handleSetCaloriesEaten}>Set Calories Eaten</button>

      {/* TOOLBAR */}
      <div className={Style.toolbar}>
        <button onClick={handleSetShowModal}>Add</button>
      </div>

      {/* MODAL  */}
      {showModal && <Modal handleSetShowModal={handleSetShowModal}/>}
    </>
  );
}

export default Budget;
