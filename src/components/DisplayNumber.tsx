import { useState } from "react";
import { connect } from "react-redux";
import store, { AppState } from "../store/store";

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

const mapReduxStateToReactProps = (state: AppState) => {
  return {
    number: state.number,
  };
};

export default connect(mapReduxStateToReactProps)(DisplayNumber);
