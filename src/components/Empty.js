import Lottie from "lottie-react-web";
import React from "react";
import animation from "../assets/16656-empty-state.json";

const Empty = () => (
  <Lottie
    height="150px"
    width="150px"
    options={{
      animationData: animation,
    }}
  />
);

export default Empty;
