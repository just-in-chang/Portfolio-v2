import { useEffect, useRef } from "react";

function Water(props) {
    const waterRef = useRef(null);

    useEffect(() => {
        let ctx = waterRef.current.getContext("2d");
        ctx.width = props.width;
        ctx.height = props.height;
        ctx.fillStyle = "#63D1F2";
        ctx.fillRect(0, 0, props.width, props.height);
    }, [props.width, props.height]);

    return (
        <canvas
            ref={waterRef}
            className="water"
            width={window.innerWidth}
            height={window.innerHeight}
        />
    );
}

export default Water;
