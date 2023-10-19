const DisplayNumber = ({ number }: { number: number }) => {
  return (
    <div>
      <h1>display number</h1>
      <input type="text  " value={number} readOnly />
    </div>
  );
};

export default DisplayNumber;
