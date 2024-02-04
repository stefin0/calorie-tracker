import { useEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import Style from "./Budget.module.css";
import Modal from "../Modal/Modal";

function Budget() {
  const [caloriesEaten, setCaloriesEaten] = useLocalStorage(
    "caloriesEaten",
    "0",
  );
  const [caloriesTotal, setCaloriesTotal] = useLocalStorage("bmr", "0");
  const [input, setInput] = useState();
  const [showModal, setShowModal] = useState(false);

  const caloriesRatio = (caloriesEaten / caloriesTotal) * 100;

  function handleSetInput(e) {
    setInput(e.target.value);
  }

  function handleSetCaloriesEaten() {
    setCaloriesEaten(input);
  }

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
      <h1>{caloriesRatio}</h1>

      {/* MODAL  */}
      {showModal && <Modal handleSetShowModal={handleSetShowModal} />}
    </>
  );
}

export default Budget;
