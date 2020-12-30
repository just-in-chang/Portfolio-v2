import { useEffect, useRef } from "react";

function Hill1(props) {
    const hill1Ref = useRef(null);

    const drawHill = (ctx) => {
        ctx.clearRect(0, 0, props.width, props.height);

        const hill = new Image();
        hill.src = "https://i.imgur.com/WMmmbjC.png";
        hill.onload = () => {
            let pattern = ctx.createPattern(hill, "repeat");
            ctx.fillStyle = pattern;

            let fillStart = 0;
            while (fillStart < ctx.height * 0.4) {
                fillStart += hill.height;
            }
            ctx.fillRect(0, fillStart, ctx.width, hill.height);
            ctx.fillStyle = "#4DB9E7";
            ctx.fillRect(0, fillStart + hill.height, ctx.width, props.height);
        };
    };

    useEffect(() => {
        let ctx = hill1Ref.current.getContext("2d");
        ctx.width = props.width;
        ctx.height = props.height;
        drawHill(ctx);
    }, [props.width, props.height]);

    return (
        <canvas
            ref={hill1Ref}
            id="hill1"
            width={window.innerWidth}
            height={window.innerHeight}
        />
    );
}

export default Hill1;
