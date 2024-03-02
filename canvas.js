let mazeSize = 31;

/* Kruskal */
function genMaze(s) {
    let maze = [];
    let output = [];
    let size;
    let count = 3;
    let edges = [];

    size = s;
    for (let i = 0; i < size; i++) {
        let row = [];
        for (let j = 0; j < size; j++)
            if (i == 0)
                if (j == 1) row.push(0);
                else row.push(1);
            else if (i == size - 1)
                if (j == size - 2) row.push(0);
                else row.push(1);
            else if (i % 2 == 0)
                if (j == 0 || j == size - 1) row.push(1);
                else {
                    let v = Math.abs((j % 2) - 2);
                    if (v == 1) {
                        row.push(v);
                        edges.push({ i: i, j: j });
                    } else if (v == 2) row.push(v);
                    else {
                        row.push(count);
                        count++;
                    }
                }
            else {
                let v = Math.abs((j % 2) - 1);

                if (v == 1) {
                    row.push(v);
                    edges.push({ i: i, j: j });
                } else if (v == 2) row.push(v);
                else {
                    row.push(count);
                    count++;
                }
            }
        maze.push(row);
    }

    edges.sort(() => Math.random() - 0.5);
    while (edges.length != 0) {
        let e = edges.pop();
        if (maze[e.i - 1][e.j] > 2) {
            let low;
            let max;
            if (maze[e.i - 1][e.j] != maze[e.i + 1][e.j]) {
                low = Math.min(maze[e.i - 1][e.j], maze[e.i + 1][e.j]);
                max = Math.max(maze[e.i - 1][e.j], maze[e.i + 1][e.j]);
                maze[e.i][e.j] = low;
                for (let x = 0; x < size; x++)
                    for (let y = 0; y < size; y++)
                        if (maze[x][y] == max) maze[x][y] = low;
            }
        } else {
            let low;
            let max;
            if (maze[e.i][e.j - 1] != maze[e.i][e.j + 1]) {
                low = Math.min(maze[e.i][e.j - 1], maze[e.i][e.j + 1]);
                max = Math.max(maze[e.i][e.j - 1], maze[e.i][e.j + 1]);
                maze[e.i][e.j] = low;
                for (let x = 0; x < size; x++)
                    for (let y = 0; y < size; y++)
                        if (maze[x][y] == max) maze[x][y] = low;
            }
        }
    }

    for (let i = 0; i < size; i++) {
        var row = [];
        for (let j = 0; j < size; j++) {
            let v = maze[i][j];
            if (maze[i][j] == 2) {
                if (
                    maze[i - 1][j] == 3 &&
                    maze[i][j - 1] == 3 &&
                    maze[i + 1][j] == 3 &&
                    maze[i][j + 1] == 3
                )
                    v = 3;
                else v = 1;
            }
            if (v == 3) {
                v = 0;
            } else if (isNaN(v)) v = 1;
            row.push(v);
        }
        output.push(row);
    }

    for (let i = 0; i < size; i++)
        for (let j = 0; j < size; j++)
            if (isNaN(output[i][j])) output[i][j] = 1;

    return output;
}

/* Node */
class Node {
    constructor(X, Y, W, P) {
        this.x = X;
        this.y = Y;
        this.weight = W;
        this.parent = P;
    }

    compare(node) {
        if (this.x == node.x && this.y == node.y) return true;
        return false;
    }
}

/* TinyQueue */
class TinyQueue {
    constructor(data = [], compare = defaultCompare) {
        this.data = data;
        this.length = this.data.length;
        this.compare = compare;

        if (this.length > 0) {
            for (let i = (this.length >> 1) - 1; i >= 0; i--) this._down(i);
        }
    }

    push(item) {
        this.data.push(item);
        this.length++;
        this._up(this.length - 1);
    }

    pop() {
        if (this.length === 0) return undefined;

        const top = this.data[0];
        const bottom = this.data.pop();
        this.length--;

        if (this.length > 0) {
            this.data[0] = bottom;
            this._down(0);
        }

        return top;
    }

    peek() {
        return this.data[0];
    }

    _up(pos) {
        const { data, compare } = this;
        const item = data[pos];

        while (pos > 0) {
            const parent = (pos - 1) >> 1;
            const current = data[parent];
            if (compare(item, current) >= 0) break;
            data[pos] = current;
            pos = parent;
        }

        data[pos] = item;
    }

    _down(pos) {
        const { data, compare } = this;
        const halfLength = this.length >> 1;
        const item = data[pos];

        while (pos < halfLength) {
            let left = (pos << 1) + 1;
            let best = data[left];
            const right = left + 1;

            if (right < this.length && compare(data[right], best) < 0) {
                left = right;
                best = data[right];
            }
            if (compare(best, item) >= 0) break;

            data[pos] = best;
            pos = left;
        }

        data[pos] = item;
    }
}

function defaultCompare(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}

/* Dijkstra */
function getNeighbors(maze, current) {
    var neighbors = [];
    var final = [];

    // Adds the node that is above, to the right, below, and to the left
    neighbors.push({ x: current.x, y: current.y - 1 });
    neighbors.push({ x: current.x + 1, y: current.y });
    neighbors.push({ x: current.x - 1, y: current.y });
    neighbors.push({ x: current.x, y: current.y + 1 });

    for (var i = 0; i < neighbors.length; i++) {
        if (
            !(neighbors[i].x < 0 || neighbors[i].x >= maze.length) &&
            !(neighbors[i].y < 0 || neighbors[i].y >= maze[0].length) &&
            maze[neighbors[i].x][neighbors[i].y] == 0
        )
            final.push(neighbors[i]);
    }

    return final;
}

function pqContains(pq, node) {
    var items = pq.data;
    for (var i = 0; i < items.length; i++) {
        if (items[i].compare(node)) return true;
    }
    return false;
}

function pqGet(pq, x, y) {
    var items = pq.data;
    for (var i = 0; i < items.length; i++) {
        if (items[i].x == x && items[i].y == y) return items[i];
    }
}

function containArray(arr, x, y) {
    for (var i = 0; i < arr.length; i++)
        if (arr[i].x == x && arr[i].y == y) return true;
    return false;
}

let getWeightDijkstra = function (node, end) {
    return 1 + node.weight;
};

function dijkstraCalculateMaze(maze, start, end, weightFunction) {
    var open = new TinyQueue(
        [
            new Node(
                start.x,
                start.y,
                0,
                new Node(start.x, start.y, 0, { x: -1, y: -1 })
            ),
        ],
        function (a, b) {
            return a.weight - b.weight;
        }
    ); // create empty array of pre-evaluated positions
    var closed = new TinyQueue([], function (a, b) {
        return a.weight - b.weight;
    }); // create array of evaluated positions

    var current = open.peek();
    while (!(current.x == end.x && current.y == end.y)) {
        current = open.peek();
        open.pop();
        var neighbors = getNeighbors(maze, current);
        for (var i = 0; i < neighbors.length; i++) {
            var node = new Node(
                neighbors[i].x,
                neighbors[i].y,
                weightFunction(current, end),
                current
            );
            if (!(pqContains(open, node) || pqContains(closed, node)))
                open.push(node);
        }
        closed.push(current);
    }

    var path = [];
    var step = pqGet(closed, end.x, end.y);
    while (!(step.x == start.x && step.y == start.y)) {
        path.push(step);
        step = pqGet(closed, step.parent.x, step.parent.y);
    }

    var data = [];

    for (var i = 0; i < maze.length; i++) {
        var row = [];
        for (var j = 0; j < maze[0].length; j++)
            if (i == start.x && j == start.y) row.push("S");
            else if (i == end.x && j == end.y) row.push("E");
            else if (containArray(path, i, j)) row.push("P");
            else if (!isNaN(maze[i][j])) row.push(maze[i][j]);
        data.push(row);
    }
    return path;
}

/* A* */
let getWeightAstar = function (node, end) {
    return (
        node.weight +
        Math.sqrt(Math.pow(node.x - end.x, 2) + Math.pow(node.y - end.y, 2))
    );
};

/* Canvas Code */
let maze = genMaze(mazeSize);
let sol = dijkstraCalculateMaze(
    maze,
    { x: mazeSize - 1, y: mazeSize - 2 },
    { x: 0, y: 1 },
    getWeightAstar
);

console.log(window.innerHeight);

let stageSize =
    window.innerWidth > window.innerHeight
        ? window.innerHeight * 0.55
        : window.innerWidth * 0.55;
stageSize = Math.floor(stageSize);
while (stageSize % mazeSize != 0) stageSize--;
let tileSize = stageSize / mazeSize;

let c;
let requestId;

let canvas = document.querySelector("canvas");
var range = document.querySelector('input[type="range"]');

canvas.width = stageSize;
canvas.height = stageSize;

c = canvas.getContext("2d");

requestId = Array.apply(null, Array(sol.length)).map(() => {});
timeoutId = Array.apply(null, Array(200)).map(() => {});

drawMaze();

function drawMaze() {
    for (let i = 0; i < mazeSize; i++)
        for (let j = 0; j < mazeSize; j++)
            if (i == 0 && j == 1) {
                c.fillStyle = "rgba(255,0,0,1)";
                c.fillRect(j * tileSize, i * tileSize, tileSize, tileSize);
            } else if (i == mazeSize - 1 && j == mazeSize - 2) {
                c.fillStyle = "rgba(0,255,0,1)";
                c.fillRect(j * tileSize, i * tileSize, tileSize, tileSize);
            } else if (maze[i][j] == 1) {
                c.fillStyle = "rgba(0,0,0,1)";
                c.fillRect(j * tileSize, i * tileSize, tileSize, tileSize);
            } else if (!solContains(i, j)) {
                c.fillStyle = "rgba(255,255,255,1)";
                c.fillRect(j * tileSize, i * tileSize, tileSize, tileSize);
            }
}

function drawTile(x, y, size, start, r, style, index) {
    if (r) {
        c.clearRect(
            x - Math.floor(size - start) / 2,
            y - Math.floor(size - start) / 2,
            size,
            size
        );
        c.fillStyle = style;
        c.fillRect(
            x - Math.floor(size - start) / 2,
            y - Math.floor(size - start) / 2,
            size - 1,
            size - 1
        );
        if (size < start)
            requestId[index] = requestAnimationFrame(() =>
                drawTile(x, y, size - 1, start, r, style, index)
            );
        else {
            c.clearRect(x, y, start, start);
            c.fillStyle = style;
            c.fillRect(x, y, start, start);
            drawMaze();
            drawSolUntil(index);
            console.log(
                "Finished Tile: (" + x / tileSize + ", " + y / tileSize + ")"
            );
            cancelAnimationFrame(requestId[index]);
        }
    } else {
        c.clearRect(
            x - Math.floor(size - start) / 2,
            y - Math.floor(size - start) / 2,
            size,
            size
        );
        c.fillStyle = style;
        c.fillRect(
            x - Math.floor(size - start) / 2,
            y - Math.floor(size - start) / 2,
            size + 1,
            size + 1
        );
        if (size > tileSize * 1.5) r = true;
        requestId[index] = requestAnimationFrame(() =>
            drawTile(x, y, size + 1, start, r, style, index)
        );
    }
}

function drawSol() {
    for (let i = 1; i < sol.length; i++) {
        timeoutId[i - 1] = setTimeout(() => {
            drawTile(
                sol[i].y * tileSize,
                sol[i].x * tileSize,
                tileSize,
                tileSize,
                false,
                "rgba(255,165,0,1)",
                i
            );
            if (i == sol.length - 1) range.removeAttribute("disabled");
        }, i * 50);
    }
}

function drawSolUntil(j) {
    for (let i = 1; i < j; i++) {
        c.fillStyle = "rgba(255,165,0,1)";
        c.fillRect(
            sol[i].y * tileSize,
            sol[i].x * tileSize,
            tileSize,
            tileSize
        );
    }
}

function solContains(x, y) {
    for (let i = 1; i < sol.length; i++)
        if (sol[i].x == x && sol[i].y == y) return true;
    return false;
}

function clearSol() {
    for (let i = 1; i < sol.length; i++) {
        clearRect(sol[i].y * tileSize, sol[i].x * tileSize, tileSize, tileSize);
    }
}

document.querySelector(".projectbuttonNew").onclick = function () {
    mazeSize = range.attributes.value.value;
    stageSize =
        window.innerWidth > window.innerHeight
            ? window.innerHeight * 0.55
            : window.innerWidth * 0.55;
    stageSize = Math.floor(stageSize);
    while (stageSize % mazeSize != 0) stageSize--;
    tileSize = stageSize / mazeSize;
    canvas.width = stageSize;
    canvas.height = stageSize;

    for (let i = 0; i < requestId.length; i++)
        cancelAnimationFrame(requestId[i]);
    for (let i = 0; i < timeoutId.length; i++) clearInterval(timeoutId[i]);
    c.clearRect(0, 0, tileSize * mazeSize, tileSize * mazeSize);
    maze = genMaze(mazeSize);
    sol = dijkstraCalculateMaze(
        maze,
        { x: mazeSize - 1, y: mazeSize - 2 },
        { x: 0, y: 1 },
        getWeightAstar
    );
    drawMaze();
};

document.querySelector(".projectbuttonGo").onclick = function () {
    for (let i = 0; i < requestId.length; i++)
        cancelAnimationFrame(requestId[i]);
    for (let i = 0; i < timeoutId.length; i++) clearInterval(timeoutId[i]);
    drawSol();
};
