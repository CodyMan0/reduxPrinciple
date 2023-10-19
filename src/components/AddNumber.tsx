// import { useState } from "react";
// import store from "../store/store";

// const AddNumber = () => {
//   const [size, setSize] = useState(3);
//   return (
//     <div>
//       <h1>Add number</h1>
//       <input
//         type="button"
//         value="+"
//         onClick={() => {
//           store.dispatch({
//             type: "INCREMENT",
//             size: size,
//           });
//         }}
//       />
//       <input
//         type="text"
//         onChange={(e) => {
//           setSize(Number(e.target.value));
//         }}
//       />
//     </div>
//   );
// };

// export default AddNumber;

import { useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AddNumber = ({ onClick }: { onClick: (payload: number) => void }) => {
  console.log(onClick);
  const [size, setSize] = useState(0);
  return (
    <div>
      <h1>Add number</h1>
      <input
        type="button"
        value="+"
        onClick={() => {
          onClick(size);
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onClick: (payload: number) => {
      dispatch({ type: "INCREMENT", size: payload });
    },
  };
};

export default connect(null, mapDispatchToProps)(AddNumber);
