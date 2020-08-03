import React from "react";
import { useSpring, animated } from "react-spring";
import sun from "../images/suntrans.png";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;

function Sun() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 }
  }));
  return (
    <div onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <animated.div style={{ transform: props.xy.interpolate(trans1) }}>
        <img className="sun" src={sun} alt="Sun" />
      </animated.div>
    </div>
  );
}
export default Sun;
