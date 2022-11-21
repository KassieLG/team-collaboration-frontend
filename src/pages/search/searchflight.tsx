import axios from "axios";
import React, { useEffect, useState } from "react";

type XResponse = {
  Message: string;
};
axios.defaults.baseURL = "http://localhost:3500";
function Searchflight(): JSX.Element {
  const [x, setX] = useState<XResponse>({ Message: "Hello" });
  useEffect(() => {
    document.title = "National Quick Travel";
    axios.get("/").then((res) => {
      setX(res.data);
      console.log("Hi");
    });
  }, [0]);
  return (
    <>
      <div>Search Flight</div>
      <div>{x.Message}</div>
    </>
  );
}

export default Searchflight;
