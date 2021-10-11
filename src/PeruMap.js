import React from "react";
import Peru from "./peru.json";
import {SVGMap} from "react-svg-map";
import "react-svg-map/lib/index.css";

const PeruMap = () => {
  return <SVGMap map={Peru} className="svg-map"/>;
};

export default PeruMap;

