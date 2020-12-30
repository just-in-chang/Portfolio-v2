import Hill1 from "./ocean/Hill1";
import Hill2 from "./ocean/Hill2";
import Icons from "./Icons";
import Lights from "./ocean/Lights";
import Water from "./ocean/Water";

import { useState, useEffect } from "react";
import Parallax from "react-rellax";

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
    let [width, setWidth] = useState(currentWidth());
    let [height, setHeight] = useState(currentHeight());

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
        <div className="about">
            <Parallax speed={0}>
                <Lights width={width} height={height} />
            </Parallax>
            <Parallax speed={-3}></Parallax>
            <Parallax className="about-name-container" speed={-15}>
                <div className="about-title">JUSTIN</div>
                <div className="about-title">CHANG</div>
                <Icons />
            </Parallax>
            <Parallax speed={-9}>
                <Hill2 width={width} height={height} />
            </Parallax>
            <Parallax speed={-12}>
                <Hill1 width={width} height={height} />
            </Parallax>
            <Parallax speed={-15}>
                <Water width={width} height={height} />
            </Parallax>
        </div>
    );
}

export default Ocean;
