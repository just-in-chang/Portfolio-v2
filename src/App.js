import About from "./components/About";
import Chest from "./components/ocean/Chest";
import Experience from "./components/Experience";
import Hill from "./components/ocean/Hill";
import Icons from "./components/Icons";
import Jellyfish from "./components/ocean/Jellyfish";
import Lights from "./components/ocean/Lights";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Shipwreck from "./components/ocean/Shipwreck";
import Turtle from "./components/ocean/Turtle";
import Water from "./components/ocean/Water";

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

function App() {
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
        <div className="ocean">
            <Parallax speed={-15}>
                <Water width={width} height={height} />
            </Parallax>

            <Parallax speed={-9}>
                <Hill
                    width={width}
                    height={height}
                    imgLink="./ocean/hill1.png"
                    color="#4DB9E7"
                    start={0.4}
                />
            </Parallax>

            <Parallax speed={-15}>
                <Turtle />
            </Parallax>

            <Parallax speed={-11}>
                <Jellyfish />
            </Parallax>

            <Parallax speed={-6}>
                <Hill
                    width={width}
                    height={height}
                    imgLink="./ocean/hill2.png"
                    color="#2FA1D7"
                    start={0.5}
                />
            </Parallax>

            <Parallax className="ocean-name-container" speed={-12}>
                <div className="ocean-title">JUSTIN</div>
                <div className="ocean-title">CHANG</div>
                <div className="ocean-title2">Software Engineer</div>
            </Parallax>

            <Parallax speed={-3}>
                <Hill
                    width={width}
                    height={height}
                    imgLink="./ocean/hill3.png"
                    color="#0272BA"
                    start={0.6}
                />
            </Parallax>

            <Parallax speed={3}>
                <Hill
                    width={width}
                    height={height}
                    imgLink="./ocean/hill4.png"
                    color="#E8CA84"
                    start={0.75}
                />
            </Parallax>

            <Parallax speed={3}>
                <Shipwreck />
            </Parallax>

            <Parallax speed={3}>
                <Chest />
            </Parallax>

            <Parallax speed={4.5}>
                <Lights width={width} height={height} />
                <About />
                <Experience />
                <Projects />
            </Parallax>

            <>
                <Navbar />
                <Icons />
            </>
        </div>
    );
}

export default App;
