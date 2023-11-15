
function DiceRoller({onRoll}){

  function handleRoll() {
    let number = Math.ceil(Math.random() * 6)
    // setRandomNumber(number)
    console.log(number);
    onRoll(number);
  }

  return(
    <button onClick={handleRoll}>Roll</button>
  );
}

export default DiceRoller