import React, { useState } from "react";

export default function App() {
  const [coordinats, setcoordinats] = useState(Array(1000).fill("*"));
  const setCoordinats = (i, v) => {
    coordinats[i] = v === 0 ? 1 : 0;
    setcoordinats([...distance(coordinats)]);
  };

  const distance = (values) => {
    let left;
    let right;
    let i = 0;
    let diff = 0;
    while (i < values.length) {
      if (values[i] === 0) {
        if (left === undefined) {
          left = i;
          i = 0;
        }
        if (left < i) left = right;
        right = i;
      }
      if (i < left) values[i] = left - i;
      else {
        diff = Math.floor((right - left) / 2);
        if (values[i] !== 0) values[i] = Math.abs(right - i);
        else i = left + diff;
      }
      i++;
    }
    return values;
  };

  return (
    <div className="distance">
      {coordinats.map((el, i) => (
        <div
          style={{ background: el < 3 ? "#fff0da" : "#d8ffbd" }}
          className="item"
          onClick={() => setCoordinats(i, el)}
          key={i}
        >
          {el}
        </div>
      ))}
    </div>
  );
}
