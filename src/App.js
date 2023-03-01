import React, { useState } from "react";
import Mems from "./Mems";

const App = () => {
  const loadData = async () => {
    const response = await fetch(`https://api.imgflip.com/get_memes`);
    const responseData = await response.json();
    const arrayMems = responseData.data.memes;
    setMems(arrayMems);
  };
  const [mems, setMems] = useState(null);
  console.log(mems);

  return (
    <div>
      <button onClick={loadData}>Give me my mems</button>
      <div style={{display:'flex', flexDirection:'column', margin:'10px'}}>
      {mems && mems.map((mem) =>(
        <Mems mem={mem} />
      ))
      }
      </div>
    </div>
  );
};

export default App;
