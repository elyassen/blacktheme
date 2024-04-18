import "./App.css";
import Main from "./components/Main";
import Red from "./components/Red";
import { BASE_URL } from "./utils";
import { useEffect, useState } from "react";

function App() {
  const [red, setRed] = useState(true);
  useEffect(() => {
    async function getData() {
      const req = await fetch(`${BASE_URL}/`);
      const res = await req.json();
      console.log(res);
    }
    const timeout = setTimeout(() => {
      setRed(false);
    }, 4400);
    getData();
    return () => clearTimeout(timeout);
  }, []);
  return <div className="App">{red ? <Red /> : <Main />}</div>;
}

export default App;
