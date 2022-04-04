import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [title, getTitle] = useState<{ name?: string }>({});
  useEffect(() => {
    fetch("https://my-worker.10978645473607.workers.dev")
      .then((response: Response) => response?.json())
      .then((data) => {
        console.log(data);
        data = {'name':data}
        getTitle({ ...data });
      });
  }, []);
  return (
    <div className="App">
      <h2>hahhahahah</h2>
      {title.name}
    </div>
  );
}

export default App;