import React, { useState, useEffect } from 'react';
import Parallax from 'react-rellax';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About.jsx';
import Chest from './components/ocean/Chest.jsx';
import Experience from './components/Experience.jsx';
import Hill from './components/ocean/Hill.jsx';
import Icons from './components/Icons.jsx';
import Jellyfish from './components/ocean/Jellyfish.jsx';
import Lights from './components/ocean/Lights.jsx';
import Navbar from './components/Navbar.jsx';
import Projects from './components/Projects.jsx';
import Shipwreck from './components/ocean/Shipwreck.jsx';
import Turtle from './components/ocean/Turtle.jsx';
import Water from './components/ocean/Water.jsx';
import Pathfinder from './components/Pathfinder.jsx';

const currentWidth = () => (
  window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth
);

const currentHeight = () => (
  window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight
);

function App() {
  const [width, setWidth] = useState(currentWidth());
  const [height, setHeight] = useState(currentHeight());
  const [enableParallax, setEnableParallax] = useState(height < 750 ? 0 : 1);

  useEffect(() => {
    setEnableParallax(height < 750 ? 0 : 1);
  }, [height]);

  useEffect(() => {
    let widthTimeoutId = null;
    let heightTimeoutId = null;
    const resizeListener = () => {
      clearTimeout(widthTimeoutId);
      clearTimeout(heightTimeoutId);
      widthTimeoutId = setTimeout(() => setWidth(currentWidth()), 144);
      heightTimeoutId = setTimeout(() => setHeight(currentHeight()), 144);
    };
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return (
    <Router basename="/">
      <Route
        exact
        path="/"
        component={() => (
          <div className="ocean">
            <Parallax speed={enableParallax * -15}>
              <Water width={width} height={height} />
            </Parallax>

            <Parallax speed={enableParallax * -9}>
              <Hill
                width={width}
                height={height}
                imgLink="./ocean/hill1.png"
                color="#4DB9E7"
                start={0.4}
              />
            </Parallax>

            <Parallax speed={enableParallax * -15}>
              <Turtle />
            </Parallax>

            <Parallax speed={enableParallax * -11}>
              <Jellyfish />
            </Parallax>

            <Parallax speed={enableParallax * -6}>
              <Hill
                width={width}
                height={height}
                imgLink="./ocean/hill2.png"
                color="#2FA1D7"
                start={0.5}
              />
            </Parallax>

            <Parallax className="ocean-name-container" speed={enableParallax * -12}>
              <div className="ocean-title">JUSTIN</div>
              <div className="ocean-title">CHANG</div>
              <div className="ocean-title2">Software Engineer</div>
            </Parallax>

            <Parallax speed={enableParallax * -3}>
              <Hill
                width={width}
                height={height}
                imgLink="./ocean/hill3.png"
                color="#0272BA"
                start={0.6}
              />
            </Parallax>

            <Parallax speed={enableParallax * 3}>
              <Hill
                width={width}
                height={height}
                imgLink="./ocean/hill4.png"
                color="#E8CA84"
                start={0.75}
              />
            </Parallax>

            <Parallax speed={enableParallax * 3}>
              <Shipwreck />
            </Parallax>

            <Parallax speed={enableParallax * 3}>
              <Chest />
            </Parallax>

            <Parallax speed={enableParallax * 4.5}>
              <Lights width={width} height={height} />
              <About />
              <Experience />
              <Projects />
            </Parallax>

            <Navbar />
            <Icons />
          </div>
        )}
      />
      <Route exact path="/pathfinder" component={Pathfinder} />
    </Router>
  );
}

export default App;
