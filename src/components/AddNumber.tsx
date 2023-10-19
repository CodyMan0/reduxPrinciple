import { Dispatch, SetStateAction, useState } from "react";

const AddNumber = ({
  setNum,
}: {
  setNum: Dispatch<SetStateAction<number>>;
}) => {
  const [size, setSize] = useState(1);
  return (
    <div>
      <h1>Add number</h1>
      <input
        type="button"
        value="+"
        onClick={() => {
          setNum((prev) => prev + size);
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
