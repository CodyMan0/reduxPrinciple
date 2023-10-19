import { useState } from "react";
import AddNumberRoot from "./components/AddNumberRoot";
import DisplayNumberRoot from "./components/DisplayNumberRoot";

const App = () => {
  const [num, setNum] = useState<number>(0);
  return (
    <div>
      <h1>Root</h1>
      <AddNumberRoot setNum={setNum} />
      <DisplayNumberRoot number={num} />
    </div>
  );
};

export default App;
