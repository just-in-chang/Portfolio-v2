import ScriptTag from "react-script-tag";

function Maze() {
    return (
        <div>
            <canvas className="maze" />
            <ScriptTag type="text/javascript" src="canvas.js" />
        </div>
    );
}

export default Maze;
