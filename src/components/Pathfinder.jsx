import React, { useState } from "react";
import { Row } from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";
import Maze from "./Maze";

function Pathfinder() {
  const [value, setValue] = useState(31);
  return (
    <div className="pathfinder">
      <h2> Pathfinder </h2>
      <div className="mazeHolder">
        <Maze className="maze" />
      </div>
      <Row className="projectButton">
        <button className="projectbuttonNew">New</button>
        <button className="projectbuttonGo">Go</button>
      </Row>
      <RangeSlider
        value={value}
        onChange={(changeEvent) => setValue(changeEvent.target.value)}
        min={5}
        max={71}
        step={2}
        size="lg"
        tooltip="off"
      />
    </div>
  );
}

export default Pathfinder;
