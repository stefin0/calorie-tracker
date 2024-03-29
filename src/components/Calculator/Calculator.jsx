import { useState } from "react";
import Style from "./Calculator.module.css";

function Calculator() {
  const [formData, setFormData] = useState({
    gender: "male",
    weight: "",
    height: "",
    age: "",
  });

  const [bmr, setBmr] = useState(0);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function calculateBMR(e) {
    e.preventDefault();
    const { gender, weight, height, age } = formData;
    if (gender === "male") {
      setBmr((10 * weight + 6.25 * height - 5 * age + 5).toFixed());
    } else if (gender === "female") {
      setBmr((10 * weight + 6.25 * height - 5 * age - 161).toFixed());
    }
  }

  return (
    <form onSubmit={calculateBMR} className={Style.form}>
      {/*GENDER input*/}
      <div className={Style.group}>
        <label htmlFor="gender">Gender</label>
        <select id="gender" name="gender" onChange={handleChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      {/*WEIGHT input*/}
      <div className={Style.group}>
        <label htmlFor="weight">Weight</label>
        <input
          id="weight"
          name="weight"
          type="number"
          placeholder="Current kg"
          onChange={handleChange}
          value={formData.weight}
          required
        />
      </div>

      {/*HEIGHT input*/}
      <div className={Style.group}>
        <label htmlFor="height">Height</label>
        <input
          id="height"
          name="height"
          type="number"
          placeholder="Height (cm)"
          onChange={handleChange}
          value={formData.height}
          required
        />
      </div>

      {/*AGE input*/}
      <div className={Style.group}>
        <label htmlFor="age">Age</label>
        <input
          id="age"
          name="age"
          type="number"
          placeholder="Age"
          onChange={handleChange}
          value={formData.age}
          required
        />
      </div>

      <button>Calculate BMR</button>

      <p>Your BMR is {bmr}</p>
    </form>
  );
}

export default Calculator;
