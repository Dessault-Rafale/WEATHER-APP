import Forecast from "./Components/Forecast/Forecast";
import Days from "./Components/Days/Days";
import react, { useState, useEffect } from "react"
import axios from 'axios'

function App() {

  const [input, setInput] = useState([])
console.log(input);
  useEffect(() => {
    axios.get('http://api.openweathermap.org/data/2.5/forecast?zip=673002,IN&units=imperial&APPID=4f35aa6018a7c52c068ab9fb74cf1576')
      .then((res) => {
        console.log(res);
        const DailyDates = res.data.list.filter((reading) =>
          reading.dt_txt.includes("21:00:00")
        );
        //   setInput(res.data.list)
        // })
        setInput(DailyDates)
      })

  }, [])


  console.log(input);

  return (
    <div>
      <Forecast />
      <Days data={input} />
    </div>
  );
}

export default App;
