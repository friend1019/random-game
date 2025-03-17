import { useState } from "react";
import "./LotteryDraw.css";

export default function LotteryDraw() {
  const [numbers, setNumbers] = useState(
    shuffleArray(Array(4).fill(1).concat(
      Array(4).fill(2),
      Array(4).fill(3),
      Array(4).fill(4),
      Array(4).fill(5),
      Array(4).fill(6),
      Array(4).fill(7),
      Array(4).fill(8)
    ))
  );
  const [drawn, setDrawn] = useState([]);

  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  function drawNumber() {
    if (numbers.length > 0) {
      setDrawn([...drawn, numbers[0]]);
      setNumbers(numbers.slice(1));
    }
  }

  function resetDraw() {
    setNumbers(
      shuffleArray(Array(4).fill(1).concat(
        Array(4).fill(2),
        Array(4).fill(3),
        Array(4).fill(4),
        Array(4).fill(5),
        Array(4).fill(6),
        Array(4).fill(7),
        Array(4).fill(8)
      ))
    );
    setDrawn([]);
  }

  return (
    <div className="container">
      <div key={drawn.length} className="number-box">
        {drawn.length > 0 ? drawn[drawn.length - 1] : "Start"}
      </div>
      <button onClick={drawNumber} disabled={numbers.length === 0} className="draw-button">
        뽑기
      </button>
      <p className="remaining">남은 수 : {numbers.length}</p>
      <button onClick={resetDraw} className="reset-button">
        Reset
      </button>
    </div>
  );
}
