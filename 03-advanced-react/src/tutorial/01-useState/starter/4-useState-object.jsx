import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    hobby: "read books",
  });

  const displayPerson = () => {
    // setPerson({ name: "John", age: 40, hobby: "screaming at computer" });
     setPerson({ ...person, name: "John" });
  };
  const { name, hobby, age } = person;

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h4>Enjoys to : {hobby}</h4>
      <button className="btn" onClick={displayPerson}>
        show John
      </button>
    </>
  );
};

export default UseStateObject;
