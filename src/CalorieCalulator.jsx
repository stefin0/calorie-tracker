import { useState } from "react";
import Style from "./CalorieCalculator.module.css";

function CalorieCalculator() {
  const [result, setResult] = useState("");
  const [formData, setFormData] = useState({
    num1: "",
    num2: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function calcTwoNum(e) {
    e.preventDefault();

    setResult(+formData.num1 + +formData.num2);
  }

  return (
    <form onSubmit={calcTwoNum} className={Style.form}>
      <div className={Style.group}>
        <label htmlFor="num1">Number 1</label>
        <input
          type="number"
          id="num1"
          name="num1"
          onChange={handleChange}
          value={formData.num1}
          required
        />
      </div>

      <div className={Style.group}>
        <label htmlFor="num2">Number 2</label>
        <input
          type="number"
          id="num2"
          name="num2"
          onChange={handleChange}
          value={formData.num2}
          required
        />
      </div>

      <button>Calculate</button>

      <p>Total Calories: {result}</p>
    </form>
  );
}

export default CalorieCalculator;
