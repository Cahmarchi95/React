import { useState } from "react";

const ShortCircuitOverview = () => {
  //falsy
  // (|| ou) se a primeira condição for falsa, ele vai para a segunda que é VERDADEIRA. Linha 13 "hello world" e linha 16 "Susy"
  const [text, setText] = useState("");
  //truthy
  //(&& e) retorna o primeiro valor se for FALSO ou o segundo se o primeiro for verdadeiro. Por isso na linha 14 não aparece nada no console ("") e na 15 "hello world"
  const [name, setName] = useState("susy");

  const codeExample = text || "hello world";

  return (
    <div>
      <h4>Falsy OR : {text || "hello world"}</h4>
      <h4>Falsy OR : {text && "hello world"}</h4>
      <h4>Truthy AND : {name && "hello world"}</h4>
      <h4>Truthy OR : {name || "hello world"}</h4>
      {codeExample}
    </div>
  );
}
export default ShortCircuitOverview;
