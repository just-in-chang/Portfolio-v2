import React, { useEffect, useRef } from 'react';

function Hill(props) {
  const hillRef = useRef(null);

  const drawHill = (ctx) => {
    ctx.clearRect(0, 0, props.width, props.height);

    const hill = new Image();
    hill.src = props.imgLink;
    hill.onload = () => {
      const pattern = ctx.createPattern(hill, 'repeat');
      ctx.fillStyle = pattern;

      let fillStart = 0;
      while (fillStart < ctx.height * props.start) {
        fillStart += hill.height;
      }
      ctx.fillRect(-330, fillStart, ctx.width * 2, hill.height);
      ctx.fillStyle = props.color;
      ctx.fillRect(0, fillStart + hill.height, ctx.width, ctx.height);
    };
  };

  useEffect(() => {
    const ctx = hillRef.current.getContext('2d');
    ctx.width = props.width;
    ctx.height = props.height;
    drawHill(ctx);
  }, [props.width, props.height]);

  return (
    <canvas
      ref={hillRef}
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
}

export default Hill;
