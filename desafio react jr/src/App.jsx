import { useState } from "react";
import "./App.css";

function App() {
  const [ClickedPoints, setClickedPoints] = useState([]);

  function getCordenates(e) {
    const { clientX, clientY } = e;

    setClickedPoints([...ClickedPoints, { clientX, clientY }]);
  }

  return (
    <div className="App" on onClick={getCordenates}>
      {ClickedPoints}
    </div>
    
  );
}

export default App;
