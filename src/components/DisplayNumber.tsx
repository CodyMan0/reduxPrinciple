import { useState } from "react";
import store from "../store/store";

const DisplayNumber = () => {
  const [numStateInRedux, setNumStateInRedux] = useState(
    store.getState().number
  );
  store.subscribe(() => {
    setNumStateInRedux(store.getState().number);
  });

  return (
    <div>
      <h1>display number</h1>
      <input type="text " value={numStateInRedux} readOnly />
    </div>
  );
};

export default DisplayNumber;
