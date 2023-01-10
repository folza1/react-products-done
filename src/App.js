import "./App.css";
import { Data } from "./Data";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState({ show: false, item: {} });

  return (
    <div className="App">
      <header className="App-header">
        {Data.products.map((item, index) => {
          return (
            <div
              style={{
                width: 200,
                height: 100,
                float: "left",
                border: "1px solid red",
                padding: 5,
              }}
              onClick={() => setSelected({ show: true, item: item })}
            >
              {item.title}
            </div>
          );
        })}
      </header>
      {selected.show && (
        <div
          onClick={() => setSelected({ show: false, item: {} })}
          style={{
            position: "fixed",
            width: 300,
            height: 200,
            top: 100,
            left: 100,
            border: "1px solid red",
            background: "#fff",
          }}
        >
          <li>{selected.item.title}</li>
          <li>{selected.item.description}</li>
          <li>
            <img src={selected.item.thumbnail} alt="" width="90%" />
          </li>
        </div>
      )}
    </div>
  );
}

export default App;
