import React from "react";

import { observer, inject } from "mobx-react";
import Box from "../components/Box";

function Canvas(props) {
  const { store } = props;

  return (
    <div className="canva">
      {store.boxes.map((box, index) => { 
        return (
        <Box
          id={box.id}
          key={index}
          color={box.color}
          left={box.left}
          top={box.top}
          width={box.width}
          height={box.height}
          selected={box.selected}
          box={box}
        />
      )})}
    </div>
  );
}

export default inject('store')(
  observer(Canvas)
);
