// const { randomInt } = require("crypto");

const canvas = document.getElementById('drow');
const ctx = canvas.getContext('2d');






//説明は src/thinks/printTreeREADME.md
//propaty

const Mix_Y= 0.2
const Max_Y = 0.6
let issuessManager = {
    "count":2,
    "discassion":24
}

let treeManager = {
    "main":{
        "end_pos":[60,423],
        "commit":3452
    },
    "v0.1":{
        "end_pos":[24,57],
        "commit":32
    }
}

let PullrequestManager = {
    "helloWold":{
        "end_pos":[0,0],
        "commit":3
    }
}


//testDates GET(linux)


treeManager = {
    "main":{
        "end_pos":[60,423],
        "commit":1324544,
        "issuess":0,

    },

    "v0.1":{
        "end_pos":[24,57],
        "commit":32,
        "isuess":2
    }
}

PullrequestManager = {
    "Updated README.md file with other missing components highlighted.":{
        "end_pos":[343,234],
        "commit":6
    },
    "bugfix: updated tutorial002_py310.py for tax=0 situation":{
        "end_pos":[343,234],
        "commit":18
    },
    "🌐 Add Russian translation for docs/ru/docs/advanced/async-tests.md  approved-1 lang-all lang-ru":{
        "end_pos":[343,234],
        "commit":19
    },
    "🌐 Add Japanese translation for docs/ja/docs/environment-variables.md  awaiting-review lang-all lang-ja#13226 opened 3 days ago by k94-ishi":{
        "end_pos":[343,234],
        "commit":12
    },
    "✅ Simplify tests for: test_testing_dependencies":{
        "end_pos":[343,234],
        "commit":8
    },
    "✅ Simplify tests for: test_testing  refactor⬆️ Upgrade python-multipart to >=0.0.18 upgrade#13219 opened 4 days ago by DanielKusyDev":{
        "end_pos":[343,234],
        "commit":13
    },
    " 2":{
        "end_pos":[343,234],
        "commit":12
    },
    "✅ Simplify tests for: test_query_params_str_validations":{
        "end_pos":[343,234],
        "commit":7
    },
    "🌐 Update Portuguese Translation for docs/pt/docs/tutorial/request-forms.md  approved-1 lang-all lang-pt":{
        "end_pos":[343,234],
        "commit":13
    },
    "test openapi schema output with separate_input_output_schemas=False":{
        "end_pos":[343,234],
        "commit":19
    },
    "🐛 Fix parameter models with alias ":{
        "end_pos":[343,234],
        "commit":12
    },
    "🔧 Add Pydantic 2 trove classifier ":{
        "end_pos":[343,234],
        "commit":5
    },
    "🌐 Add Arabic translation for docs/ar/docs/index.md  awaiting-review lang-all lang-ar":{
        "end_pos":[343,234],
        "commit":20
    },
    "✅ Simplify tests for request_files":{
        "end_pos":[343,234],
        "commit":17
    },
    "update pytest asyncio test added lifespan and update docs ":{
        "end_pos":[343,234],
        "commit":14
    },
    "🌐 Add Russian translation for docs/ru/docs/tutorial/bigger-applications.md ":{
        "end_pos":[343,234],
        "commit":8
    },
    "approved-1 lang-all lang-ru":{
        "end_pos":[343,234],
        "commit":5
    },
    "dependencies internal python":{
        "end_pos":[343,234],
        "commit":14
    },
    "⬆ Update httpx requirement from <0.28.0,>=0.23.0 to >=0.23.0,<0.29.0 ":{
        "end_pos":[343,234],
        "commit":10
    },
    " dependencies internal python":{
        "end_pos":[343,234],
        "commit":11
    },
    "Update anyio in requirements-tests.txt ":{
        "end_pos":[343,234],
        "commit":13
    },
    "• Draft":{
        "end_pos":[343,234],
        "commit":12
    },
    "⬆️ Bump starlette to allow up to 0.45.0 ":{
        "end_pos":[343,234],
        "commit":13
    },
    "⬆ Allow httpx 0.28.x, relax pins ":{
        "end_pos":[343,234],
        "commit":3
    },
    "fix: bugfix/openapi/header_params_model ":{
        "end_pos":[343,234],
        "commit":9
    }
}


console.log(PullrequestManager["fix: bugfix/openapi/header_params_model "]["end_pos"])

//tool

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // 上限は除き、下限は含む
}

function defalt_treeManageValue()
{
    return {"v0.1":{"start_high":34,"end_pos":[24,57],"commit":32}}
}

canvas.addEventListener("click",(c)=>
{
    console.log(c.offsetX,c.offsetY);
    console.log(`offsetX:${c.offsetX},\n 
        offsetY:${c.offsetY}\n
        X_size:${c.offsetX/canvas.width}\n
        Y_size:${c.offsetY/canvas.height}`);
});




//Display
function SettingMaxSizeDisplay(){
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    console.log(`nowSize\n canvas.height:${canvas.height}\n canvas.width:${canvas.width}`)
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
    
    if(index > 100){
        ctx.lineWidth = 100;
    }
    else{
        ctx.lineWidth = index;
    }

    // main Branch の 大木の長さを比率で管理している
    ctx.moveTo(centerX, canvas.height * 0.05);
    ctx.lineTo(centerX, canvas.height * 0.93);
    ctx.closePath();
    ctx.stroke();
    console.log("SetDrow");
    console.log(`index:${index}\ncenterX:${centerX}\n`)
}

const setTree = () => {
    return (-1 + (getRandomInt(0,2) * 2)) * getRandomInt(centerX * 0.4,centerX * 0.85);
} 
// console.log(setTree());
// console.log(getRandomInt(0,2));

const tree_mix_high = canvas.height * Mix_Y
const tree_max_high = canvas.height * Max_Y
let tree_high = 0

function settingTree(count){
    
    for(let i = 0; i < count; i++){
        centerX = canvas.width / 2;
        
        ctx.beginPath();
        ctx.lineWidth = 3;
        tree_high = getRandomInt(tree_mix_high, tree_max_high)
        ctx.moveTo(centerX + getRandomInt(-10,10) * 3, tree_high);
        ctx.lineTo(centerX + setTree(), tree_high - (getRandomInt(0,10) * 20));
        
        
        ctx.closePath();
        ctx.stroke();
    }
    
    
}



/* sennter
tree

 */

//Drow Test

window.addEventListener('DOMContentLoaded', ()=> {
    SettingMaxSizeDisplay();
    
    //GET Date    
    senterDrow(treeManager["main"]["commit"]);
    settingTree(402);

});



window.addEventListener('resize', SettingMaxSizeDisplay);