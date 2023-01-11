import "./App.css";
import { Data } from "./Data";
import { useState } from "react";
import cart from "./cart.jpg";

function App() {
  const [selected, setSelected] = useState({ show: false, item: {} });

  return (
    <div id="main">
      {Data.products.map((item, index) => {
        return (
          <div
            className="divStyle"
            onClick={() => setSelected({ show: true, item: item })}
          >
            <div
              id="thumbNail"
              style={{ backgroundImage: `url(${item.thumbnail})` }}
            ></div>
            <div id="product">
              <div id="title">
                <p>{item.title}</p>
              </div>
              <div id="price">
                <p>${item.price}</p>
              </div>
              <div
                id="cart"
                style={{
                  backgroundImage: `url(${cart})`,
                }}
              ></div>
            </div>
            <div id="reszletek">
              <button id="buttonDetails">Details</button>
            </div>
          </div>
        );
      })}
      {selected.show && (
        <div onClick={() => setSelected({ show: false, item: {} })} id="window">
          <h2 className="dt">Details</h2>
          <p>
            <span>Title:</span> {selected.item.title}
          </p>
          <p>
            <span>Description:</span> {selected.item.description}
          </p>
          <p>
            <span>Discount:</span> ${selected.item.discountPercentage}
          </p>
          <p>
            <span>Category:</span> {selected.item.category}
          </p>
          <div className="close">Close</div>
        </div>
      )}
    </div>
  );
}

export default App;
