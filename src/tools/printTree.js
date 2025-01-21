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


//Display
function SettingMaxSizeDisplay(){
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    console.log("LoadOK");
}

const onRepaintCanvas = function() {
    console.log('repaint');

    const canvas =  document.getElementById('drow');
    const context = canvas.getContext('2d');
    
    context.fillStyle = 'red';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    context.fillStyle = 'blue';
    context.fillRect(10, 10, canvas.width-20, canvas.height-20);
};

let centerX = canvas.width /2

//renders
function senterDrow(index){
    centerX = canvas.width / 2;
    ctx.beginPath();
    ctx.lineWidth = index;
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, 876);
    ctx.closePath();
    ctx.stroke();
    console.log("SetDrow");
    console.log(`index:${index}\ncenterX:${centerX}\n`)
}



function settingTree(high){
    centerX = canvas.width / 2;
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, 876);
    ctx.closePath();
    ctx.stroke();
}



/* sennter
tree

 */

//Drow Test

window.addEventListener('DOMContentLoaded', ()=> {
    SettingMaxSizeDisplay();
    
    //GET Date    
    senterDrow(3);

});
window.addEventListener('resize', SettingMaxSizeDisplay);