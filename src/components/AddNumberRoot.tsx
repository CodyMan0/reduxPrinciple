import { Dispatch, SetStateAction } from "react";
import AddNumber from "./AddNumber";

const AddNumberRoot = ({
  setNum,
}: {
  setNum: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div>
      <h1>Add Number Root</h1>
      <AddNumber setNum={setNum} />
    </div>
  );
};

export default AddNumberRoot;
