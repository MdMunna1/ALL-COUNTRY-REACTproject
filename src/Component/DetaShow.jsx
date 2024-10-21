import { useState } from "react";

export default function DetaShow(all) {
  const { name, languages, flags, capital } = all.deta;
  const [velu, setValu] = useState(false);
  function btnToggol() {
    setValu(!velu);
  }

  const flagFunction = all.allFlagsFunction;
  // console.log(all.allFlagsFunction);

  return (
    <>
   
      <div className={`p-2 m-2 shadow-md border ${
            velu ? "bg-red-400" : "bg-slate-300"
          }`}>
        <img className="p-2 w-full object-cover h-40" src={flags.png} alt="" />
        <h3 className="p-2 text-2xl font-bold">Name : {name.common}</h3>
        <p className="p-2">Capital : {capital || "N/A"}</p>
        <p className="p-2">
          languages:{" "}
          {languages?.eng ||
            languages?.spa ||
            languages?.ara ||
            languages?.deu ||
            languages?.swe ||
            languages?.fra ||
            languages?.cha ||
            languages?.por ||
            languages?.kor ||
            languages?.mon ||
            languages?.msa ||
            languages?.pol ||
            languages?.dzo ||
            languages?.mya ||
            languages?.srp ||
            languages?.sqi ||
            languages?.fas ||
            languages?.div ||
            languages?.rus ||
            languages?.jpn ||
            languages?.ron ||
            languages?.kaz ||
            "N/A"}
        </p>
        <button
          onClick={() => {
            btnToggol();
            flagFunction(flags);
          }}
          className="p-2 rounded-md bg-lime-600 m-2 font-semibold"
        >
          {velu ? "VISITED" : "NOT VISITED"}
        </button>
        {/* <button onClick={flagFunction} > Flag Show</button> */}
      </div>
    </>
  );
}
