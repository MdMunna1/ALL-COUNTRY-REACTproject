import { useEffect } from "react";
import { useState } from "react";
import DetaShow from "./DetaShow";

export default function DetaLoad() {
  const [countrys, setCountrys] = useState([]);
  const [allFlags,setFlags]=useState([])
  function allFlagsFunction(a){
    
    console.log(a)
    setFlags([...allFlags , a])
    
  }
console.log(allFlags)




  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((deta) => setCountrys(deta));
  }, []);

  return (
    <>
    <div className="border flex flex-wrap">
    {
  allFlags.map(a=><img className="w-16 h-12 m-1" src={a.png} alt="" /> )
}
    </div>
      <div className="grid sm:grid-cols-3 place-content-center">
        {countrys.map((all) => (
          <DetaShow allFlagsFunction={allFlagsFunction} deta={all} />
        ))}
      </div>
    </>
  );
}
