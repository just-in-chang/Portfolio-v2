import React, { useEffect, useRef } from "react";

function Lights(props) {
  const lightsRef = useRef(null);

  const leftLight = (ctx, time) => {
    ctx.beginPath();
    ctx.moveTo(
      props.width * 0.125 -
        5 * Math.sin((time.getMilliseconds() * Math.PI) / 1000),
      0
    );
    ctx.lineTo(
      props.width * 0.175 -
        10 * Math.sin((time.getMilliseconds() * Math.PI) / 1000),
      props.height
    );
    ctx.lineTo(
      props.width * 0.275 +
        10 * Math.sin((time.getMilliseconds() * Math.PI) / 1000),
      props.height
    );
    ctx.lineTo(
      props.width * 0.175 +
        5 * Math.sin((time.getMilliseconds() * Math.PI) / 1000),
      0
    );
    ctx.fill();
    ctx.closePath();
  };

  const middleLight = (ctx, time) => {
    ctx.beginPath();
    ctx.moveTo(
      props.width * 0.8 -
        5 * Math.sin((time.getMilliseconds() * Math.PI) / 1000),
      0
    );
    ctx.lineTo(
      props.width * 0.725 -
        5 * Math.sin((time.getMilliseconds() * Math.PI) / 1000),
      props.height
    );
    ctx.lineTo(
      props.width * 0.775 +
        5 * Math.sin((time.getMilliseconds() * Math.PI) / 1000),
      props.height
    );
    ctx.lineTo(
      props.width * 0.85 +
        5 * Math.sin((time.getMilliseconds() * Math.PI) / 1000),
      0
    );
    ctx.fill();
    ctx.closePath();
  };

  const rightLight = (ctx, time) => {
    ctx.beginPath();
    ctx.moveTo(
      props.width * 0.875 -
        5 * Math.sin((time.getMilliseconds() * Math.PI) / 1000),
      0
    );
    ctx.lineTo(
      props.width * 0.8 -
        5 * Math.sin((time.getMilliseconds() * Math.PI) / 1000),
      props.height
    );
    ctx.lineTo(
      props.width * 0.85 +
        5 * Math.sin((time.getMilliseconds() * Math.PI) / 1000),
      props.height
    );
    ctx.lineTo(
      props.width * 0.925 +
        5 * Math.sin((time.getMilliseconds() * Math.PI) / 1000),
      0
    );
    ctx.fill();
    ctx.closePath();
  };

  const drawLights = (ctx) => {
    const time = new Date();
    ctx.clearRect(0, 0, props.width, props.height);
    ctx.fillStyle = "rgba(255,255,255,0.2)";

    leftLight(ctx, time);
    middleLight(ctx, time);
    rightLight(ctx, time);
    requestAnimationFrame(() => {
      drawLights(ctx);
    });
  };

  useEffect(() => {
    const ctx = lightsRef.current.getContext("2d");
    ctx.width = props.width;
    ctx.height = props.height;
    drawLights(ctx);
  }, [props.width, props.height]);

  return (
    <canvas
      ref={lightsRef}
      id="lights"
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
}

export default Lights;
