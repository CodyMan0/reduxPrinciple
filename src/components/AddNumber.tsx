import { useState } from "react";
import store from "../store/store";

const AddNumber = () => {
  const [size, setSize] = useState(3);
  return (
    <div>
      <h1>Add number</h1>
      <input
        type="button"
        value="+"
        onClick={() => {
          store.dispatch({
            type: "INCREMENT",
            size: size,
          });
        }}
      />
      <input
        type="text"
        onChange={(e) => {
          setSize(Number(e.target.value));
        }}
      />
    </div>
  );
};

export default AddNumber;
