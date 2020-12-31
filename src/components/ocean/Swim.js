import { useEffect, useRef } from "react";

function Swim(props) {
    const swimRef = useRef(null);

    const drawSwim = (ctx, frames, frame, x) => {
        ctx.clearRect(0, 0, props.width, props.height);
        ctx.drawImage(frames[frame], x, ctx.height * props.start);

        frame++;
        frame %= props.totalFrames;

        x += 4;
        x %= ctx.width;

        requestAnimationFrame(() => {
            drawSwim(ctx, frames, frame, x);
        });
    };

    useEffect(() => {
        let ctx = swimRef.current.getContext("2d");
        ctx.width = props.width;
        ctx.height = props.height;
        ctx.globalAlpha = 0.3;

        let frames = new Array(props.totalFrames);
        for (let i = 0; i < props.totalFrames; i++) {
            let imgPh = new Image();

            imgPh.src = `${props.origin}/frame${i}.gif`;
            imgPh.onload = () => {
                frames[i] = imgPh;
                if (i == 78) drawSwim(ctx, frames, 0, 0);
            };
        }
    }, [props.width, props.height]);

    return (
        <canvas
            ref={swimRef}
            id="Swim"
            width={window.innerWidth}
            height={window.innerHeight}
        />
    );
}

export default Swim;
