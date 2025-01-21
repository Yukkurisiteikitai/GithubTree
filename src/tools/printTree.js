const canvas = document.getElementById('drow');
const ctx = canvas.getContext('2d');

//説明は src/thinks/printTreeREADME.md
//propaty
treeManager = {
    "main":{
        "start_high":24,
        "end_pos":[60,423],
        "commit":3452
    },
    "v0.1":{
        "start_high":34,
        "end_pos":[24,57],
        "commit":32
    }
}

PullrequestManager = {
    "title":{
        "start_high":34,
        "end_pos":[343,242],
        "commit":23
    }
    
}


//tool

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // 上限は除き、下限は含む
}


//renders
function senterDrow(index){
    ctx.beginPath();
    ctx.lineWidth = index;
    ctx.moveTo(750, 0);
    ctx.lineTo(750, 876);
    ctx.closePath();
    ctx.stroke();
}
senterDrow(103);


function SettingMaxSizeDisplay(){

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    console.log("LoadOK");
    onRepaint();
}

const onRepaint = function() {
    console.log('repaint');

    const canvas =  document.getElementById('drow');
    const context = canvas.getContext('2d');
    
    context.fillStyle = 'red';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    context.fillStyle = 'blue';
    context.fillRect(10, 10, canvas.width-20, canvas.height-20);
};

window.addEventListener('DOMContentLoaded', SettingMaxSizeDisplay);
window.addEventListener('resize', SettingMaxSizeDisplay);



function settingTree(high){
    ctx.beginPath();
    ctx.lineWidth = index;
    ctx.moveTo(750, 0);
    ctx.lineTo(750, 876);
    ctx.closePath();
    ctx.stroke();
}


/* sennter
tree 
 */

//Drow Test

