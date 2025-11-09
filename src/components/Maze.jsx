import React, { useEffect } from "react";

function Maze() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "canvas.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <canvas className="maze" />
    </div>
  );
}

export default Maze;
