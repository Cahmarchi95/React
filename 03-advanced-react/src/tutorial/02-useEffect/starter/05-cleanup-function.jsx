import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [value, setValue] = useState(false);
  console.log("render");
  return (
    <div>
      <button className="btn" onClick={() => setValue(!value)}>
        toggle component
      </button>
      {value && <SecondComponent />}
    </div>
  );
};

const SecondComponent = () => {
  useEffect(() => {
    //Event Listener
    const someFunc = () => {
      //some logic
    };
    window.addEventListener("scroll", someFunc);
    return () => window.removeEventListener("scroll", someFunc);
  }, []);
  return <h2>Hello World</h2>;
};

//exemplo de cleanup dentro do useEffect
//console.log("hmm, this is interesting");
//     const intId = setInterval(() => {
//console.log("hello from interval");
//     }, 1000);
//     return () => {
//       clearInterval(intId);
//       console.log("cleanup")
//     };

export default CleanupFunction;
