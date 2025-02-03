const svg_canvas = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg_canvas.setAttribute("id", "draw");
svg_canvas.setAttribute("width", "1500");
svg_canvas.setAttribute("height", "900");
document.body.appendChild(svg_canvas);

const canvasX_size = 1500;
const canvasY_size = 900;
let centerX = canvasX_size / 2;
let centerY = canvasY_size / 2;

const greenShades = ["#3F9E4D", "#4CAF50", "#2E8B57", "#228B22", "#008000"];

function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min) + min);
}

function createBranch(start_pos, end_pos, width)
{
    let branch = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    branch.setAttribute('x1', start_pos[0]);
    branch.setAttribute('y1', start_pos[1]);
    branch.setAttribute('x2', end_pos[0]);
    branch.setAttribute('y2', end_pos[1]);
    branch.setAttribute('stroke', 'brown');
    branch.setAttribute('stroke-width', width);
    svg_canvas.appendChild(branch);
}

function createLeaf(pos)
{
    let leaf = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
    leaf.setAttribute('cx', pos[0]);
    leaf.setAttribute('cy', pos[1]);
    leaf.setAttribute('rx', getRandomInt(3, 6));
    leaf.setAttribute('ry', getRandomInt(5, 10));
    leaf.setAttribute('fill', greenShades[getRandomInt(0, greenShades.length)]);
    leaf.setAttribute('transform', `rotate(${getRandomInt(0, 360)}, ${pos[0]}, ${pos[1]})`);
    svg_canvas.appendChild(leaf);
}

function generateTree(start_pos, angle, length, depth)
{
    if (depth === 0) return;
    
    let angleRad = (angle * Math.PI) / 180;
    let end_pos = [
        start_pos[0] + length * Math.cos(angleRad),
        start_pos[1] - length * Math.sin(angleRad)
    ];

    createBranch(start_pos, end_pos, depth);

    if (Math.random() < 0.7)
{
        createLeaf(end_pos);
    }

    let mid_pos = [
        start_pos[0] + (end_pos[0] - start_pos[0]) * Math.random(),
        start_pos[1] + (end_pos[1] - start_pos[1]) * Math.random()
    ];

    if (Math.random() < 0.3)
{
        createLeaf(mid_pos);
    }
    
    let newLength = length * 0.7;
    generateTree(end_pos, angle - getRandomInt(15, 30), newLength, depth - 1);
    generateTree(end_pos, angle + getRandomInt(15, 30), newLength, depth - 1);
}

function drawTree()
{
    let trunkStart = [centerX, canvasY_size];
    let trunkEnd = [centerX, centerY];
    createBranch(trunkStart, trunkEnd, 10);
    generateTree(trunkEnd, -90, 100, 6);
}

drawTree();
