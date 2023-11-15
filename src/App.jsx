// use nextId() to generate a new unique ID when needed
import { useState } from "react";
import nextId from "./generateId";
import Die from "./Die";
import DiceRoller from "./DiceRoller";

function App() {

  const [randomNumber, setRandomNumber] = useState('')

  return (
    <>
      <DiceRoller onRoll={setRandomNumber} />
      <Die number={randomNumber}/>
    </>
  );
}

export default App;
