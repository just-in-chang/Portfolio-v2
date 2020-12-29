import { useState, useEffect, useRef } from "react";

const currentWidth = () => {
    return (
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
    );
};

const currentHeight = () => {
    return (
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight
    );
};

function Ocean() {
    const canvasRef = useRef(null);
    let [width, setWidth] = useState(currentWidth());
    let [height, setHeight] = useState(currentHeight());

    const animate = (ctx) => {
        let time = new Date();
        ctx.clearRect(0, 0, width, height);

        ctx.beginPath();
        ctx.moveTo(
            -50 - 15 * Math.sin(time.getMilliseconds() / 200) + width / 4,
            0
        );
        ctx.lineTo(
            -100 - 30 * Math.sin(time.getMilliseconds() / 200) + width / 4,
            height
        );
        ctx.lineTo(
            100 + 30 * Math.sin(time.getMilliseconds() / 200) + width / 4,
            height
        );
        ctx.lineTo(
            50 + 15 * Math.sin(time.getMilliseconds() / 200) + width / 4,
            0
        );
        ctx.fill();
        ctx.closePath();
        requestAnimationFrame(() => {
            animate(ctx);
        });
    };

    const drawOcean = () => {
        let ctx = canvasRef.current.getContext("2d");
        ctx.width = width;
        ctx.height = height;
        ctx.fillStyle = "#48D7E8";

        ctx.beginPath();
        ctx.moveTo(-50 + width / 4, 0);
        ctx.lineTo(-100 + width / 4, height);
        ctx.lineTo(100 + width / 4, height);
        ctx.lineTo(50 + width / 4, 0);
        ctx.fill();
        ctx.closePath();
        animate(ctx);
    };

    useEffect(() => {
        drawOcean();
    }, [width, height]);

    useEffect(() => {
        let widthTimeoutId = null;
        let heightTimeoutId = null;
        const resizeListener = () => {
            clearTimeout(widthTimeoutId);
            clearTimeout(heightTimeoutId);
            widthTimeoutId = setTimeout(() => setWidth(currentWidth()), 144);
            heightTimeoutId = setTimeout(() => setHeight(currentHeight()), 144);
        };
        window.addEventListener("resize", resizeListener);

        return () => {
            window.removeEventListener("resize", resizeListener);
        };
    }, []);

    return (
        <canvas
            className="ocean"
            ref={canvasRef}
            width={window.innerWidth}
            height={window.innerHeight}
        />
    );
}

export default Ocean;
