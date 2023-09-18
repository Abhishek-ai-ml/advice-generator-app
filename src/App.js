import "./App.css";
import {useEffect, useState} from "react";
import dice from './images/icon-dice.svg'

function App() {
  const [apiData, setApiData] = useState([]);
  const [advnum, setadvnum] = useState(0);

  useEffect(() => {
    fetch(`https://api.adviceslip.com/advice`)
    .then(res => res.json())
    .then(data => {
      setApiData(data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [advnum])

  console.log("API DATA", apiData);

  return (
    <div className="flex justify-center items-center bg-darkBlue w-screen h-screen text-manrope">
      <div className="flex flex-col justify-center items-center bg-darkGrayishBlue p-8 rounded-2xl relative w-[300px] lg:w-[600px] gap-y-8">
        <div className=" text-neonGreen">
          Advice #{apiData?.slip?.id}
        </div>

        <div className=" text-lightCyan text-3xl font-bold text-center">
          "{apiData?.slip?.advice}"
        </div>

        <div className="flex items-center pb-5 w-full gap-x-3 px-8">
          <div className="h-[1px] w-full bg-lightCyan"></div>
          <div className="h-[18px] w-[10px] rounded-xl bg-lightCyan"></div>
          <div className="h-[18px] w-[10px] rounded-xl bg-lightCyan"></div>
          <div className="h-[1px] w-full bg-lightCyan"></div>
        </div>

        <div className="rounded-full w-[60px] h-[60px] bg-neonGreen absolute -bottom-8 left-[40%] lg:left-[45%] flex items-center justify-center hover:cursor-pointer hover:shadow-[0px_0px_53px_8px_#52ffa8]" onClick={() => setadvnum(apiData?.slip?.advice)}>
          <img src={dice}/>
        </div>
      </div>
    </div>
  );
}

export default App;
