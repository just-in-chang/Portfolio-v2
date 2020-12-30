import { useEffect, useRef } from "react";

function Hill2(props) {
    const hill2Ref = useRef(null);

    const drawHill = (ctx) => {
        ctx.clearRect(0, 0, props.width, props.height);

        const hill = new Image();
        hill.src = "https://i.imgur.com/IuNL94m.png";
        hill.onload = () => {
            let pattern = ctx.createPattern(hill, "repeat");
            ctx.fillStyle = pattern;

            let fillStart = 0;
            while (fillStart < ctx.height * 0.5) {
                fillStart += hill.height;
            }
            ctx.fillRect(-330, fillStart, ctx.width * 2, hill.height);
            ctx.fillStyle = "#2FA1D7";
            ctx.fillRect(0, fillStart + hill.height, ctx.width, props.height);
        };
    };

    useEffect(() => {
        let ctx = hill2Ref.current.getContext("2d");
        ctx.width = props.width;
        ctx.height = props.height;
        drawHill(ctx);
    }, [props.width, props.height]);

    return (
        <canvas
            ref={hill2Ref}
            id="hill2"
            width={window.innerWidth}
            height={window.innerHeight}
        />
    );
}

export default Hill2;
