import DisplayNumber from "./DisplayNumber";

const DisplayNumberRoot = ({ number }: { number: number }) => {
  return (
    <div>
      <h1>display Number Root</h1>
      <DisplayNumber number={number} />
    </div>
  );
};

export default DisplayNumberRoot;
