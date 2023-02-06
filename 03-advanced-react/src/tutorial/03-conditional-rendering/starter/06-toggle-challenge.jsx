import { useState } from "react";

const ToggleChallenge = () => {
  const [showComponent, setShowComponent] = useState(false);
  //opção de toggle com uma função inteira
  // const toggleComponent = () => {
  //   if (showComponent) {
  //     setShowComponent(false);
  //     return;
  //   }
  //   setShowComponent(true);
  // };

  //Já o shortcut é direto no on Click do botão usando "!" para mudar o estado da variável

  return (
    <div>
      <button className="btn" onClick={() => setShowComponent(!showComponent)}>
        toggle
      </button>
      {showComponent && <SomeComponent />}
    </div>
  );
};

const SomeComponent = () => {
  return (
    <div>
      <h4 className="alert alert-danger">whatever return</h4>
    </div>
  );
};

export default ToggleChallenge;
