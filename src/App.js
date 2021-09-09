import './App.css';
import { useState } from 'react';

function App() {
  const [isBright, setIsBright] = useState(false)
  const [counter, setCounter] = useState(0)

  const increase = () => {
    setCounter((prev) => {
      return prev + 1
    })
  };


  const decrease = () => {
    setCounter((prev) => {
      return prev - 1
    })
  };
  var a = "Click to change Mode";


  const handlechange = () => {
    setIsBright(!isBright);

    console.log(a);
  };


  return (



    <>
      <div>
        <div className="container">

          <div className={(isBright) ? "Bright" : "Dark"}>
            <div className="mode">
              <button className="changeMode" onClick={handlechange}>Switch to {isBright ? "Dark" : "Bright"} Theme</button>
            </div>

            <div className="main">
              <div><h1>{counter}</h1></div>
              <div className="buttons">
                <button className="btn" onClick={increase}>Increase</button>
                <button className="btn" onClick={decrease}>Decrease</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
