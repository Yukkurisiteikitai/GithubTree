const svg_canvas = document.createElementNS("http://www.w3.org/2000/svg","svg");
svg_canvas.setAttribute("id", "drow");
svg_canvas.setAttribute("width", "1500");
svg_canvas.setAttribute("height", "900");
// document.body.appendChild(svg_canvas);

// console.log(svg_canvas.getBoundingClientRect().height);
// console.log(svg_canvas.getBoundingClientRect().top);
// const ctx = canvas.getContext('2d');

//説明は src/thinks/printTreeREADME.md
//propaty

let centerX = svg_canvas.width.animVal.valueAsString / 2;
let centerY = svg_canvas.height.animVal.valueAsString / 2;

svg_canvas.width = 1500;
svg_canvas.height = 900;

function centerReset(){
    // centerX = svg_canvas.width.animVal.valueAsString / 2;
    // centerY = svg_canvas.height.animVal.valueAsString / 2;
    centerX = 1500 /2;
    centerY = 900 /2;
    console.log(`centerReset\n X:${centerX}\nY:${centerY}`);
}
let TreeBow = []


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
    0:{
        "title":"Updated README.md file with other missing components highlighted.",
        "inclination":[0,0],
        "end_pos":[343,234],
        "commit":16
    },
    1:{
        "title":"bugfix: updated tutorial002_py310.py for tax=0 situation",
        "inclination":[0,0],
        "end_pos":[343,234],
        "commit":13
    },
    2:{
        "title":"🌐 Add Russian translation for docs/ru/docs/advanced/async-tests.md  approved-1 lang-all lang-ru",
        "inclination":[0,0],
        "end_pos":[343,234],
        "commit":12
    },
    3:{
        "title":"🌐 Add Japanese translation for docs/ja/docs/environment-variables.md  awaiting-review lang-all lang-ja#13226 opened 3 days ago by k94-ishi",
        "inclination":[0,0],
        "end_pos":[343,234],
        "commit":12
    },
    4:{
        "title":"✅ Simplify tests for: test_testing_dependencies",
        "inclination":[0,0],
        "end_pos":[343,234],
        "commit":5
    },
    5:{
        "title":"✅ Simplify tests for: test_testing  refactor⬆️ Upgrade python-multipart to >=0.0.18 upgrade#13219 opened 4 days ago by DanielKusyDev",
        "inclination":[0,0],
        "end_pos":[343,234],
        "commit":14
    },
    6:{
        "title":" 2",
        "inclination":[0,0],
        "end_pos":[343,234],
        "commit":8
    },
    7:{
        "title":"✅ Simplify tests for: test_query_params_str_validations",
        "inclination":[0,0],
        "end_pos":[343,234],
        "commit":4
    },
    8:{
        "title":"🌐 Update Portuguese Translation for docs/pt/docs/tutorial/request-forms.md  approved-1 lang-all lang-pt",
        "inclination":[0,0],
        "end_pos":[343,234],
        "commit":15
    },
    9:{
        "title":"test openapi schema output with separate_input_output_schemas=False",
        "inclination":[0,0],
        "end_pos":[343,234],
        "commit":18
    },
    10:{
        "title":"🐛 Fix parameter models with alias ",
        "inclination":[0,0],
        "end_pos":[343,234],
        "commit":10
    },
    11:{
        "title":"🔧 Add Pydantic 2 trove classifier ",
        "inclination":[0,0],
        "end_pos":[343,234],
        "commit":20
    },
    12:{
        "title":"🌐 Add Arabic translation for docs/ar/docs/index.md  awaiting-review lang-all lang-ar",
        "inclination":[0,0],
        "end_pos":[343,234],
        "commit":3
    },
    13:{
        "title":"✅ Simplify tests for request_files",
        "inclination":[0,0],
        "end_pos":[343,234],
        "commit":17
    },
    14:{
        "title":"update pytest asyncio test added lifespan and update docs ",
        "inclination":[0,0],
        "end_pos":[343,234],
        "commit":15
    },
    15:{
        "title":"🌐 Add Russian translation for docs/ru/docs/tutorial/bigger-applications.md ",
        "inclination":[0,0],
        "end_pos":[343,234],
        "commit":13
    },
    16:{
        "title":"approved-1 lang-all lang-ru",
        "inclination":[0,0],
        "end_pos":[343,234],
        "commit":5
    },
    17:{
        "title":"dependencies internal python",
        "inclination":[0,0],
        "end_pos":[343,234],
        "commit":19
    },
    18:{
        "title":"⬆ Update httpx requirement from <0.28.0,>=0.23.0 to >=0.23.0,<0.29.0 ",
        "inclination":[0,0],
        "end_pos":[343,234],
        "commit":18
    },
    19:{
        "title":" dependencies internal python",
        "inclination":[0,0],
        "end_pos":[343,234],
        "commit":16
    },
    20:{
        "title":"Update anyio in requirements-tests.txt ",
        "inclination":[0,0],
        "end_pos":[343,234],
        "commit":8
    },
    21:{
        "title":"• Draft",
        "inclination":[0,0],
        "end_pos":[343,234],
        "commit":17
    },
    22:{
        "title":"⬆️ Bump starlette to allow up to 0.45.0 ",
        "inclination":[0,0],
        "end_pos":[343,234],
        "commit":7
    },
    23:{
        "title":"⬆ Allow httpx 0.28.x, relax pins ",
        "inclination":[0,0],
        "end_pos":[343,234],
        "commit":11
    },
    24:{
        "title":"fix: bugfix/openapi/header_params_model ",
        "inclination":[0,0],
        "end_pos":[343,234],
        "commit":8
    },
}


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

svg_canvas.addEventListener("click",(c)=>
{
    console.log(c.offsetX,c.offsetY);
    console.log(`offsetX:${c.offsetX},\n 
        offsetY:${c.offsetY}\n
        X_size:${c.offsetX/svg_canvas.width.animVal.valueAsString}\n
        Y_size:${c.offsetY/svg_canvas.height.animVal.valueAsString}`);
});



console.log(svg_canvas.getBoundingClientRect());

//Display
function SettingMaxSizeDisplay(){
    console.log(`nowSize\n canvas.height:${svg_canvas.height.animVal.valueAsString}\n canvas.width:${svg_canvas.width.animVal.valueAsString}`);
    console.log("[Scuess]Load-CanvasSize");
}


const onRepaintCanvas = function() {
    console.log('repaint');

    // const svg_canvas =  document.getElementById('drow');
    // const context = svg_canvas.getContext('2d');
    
    // context.fillStyle = 'red';
    // context.fillRect(0, 0, svg_canvas.width, svg_canvas.height);
    
    // context.fillStyle = 'blue';
    // context.fillRect(10, 10, svg_canvas.width-20, svg_canvas.height-20);
};



treeManager = {
        "main":{
            "s_pos":[0,0],
            "e_pos":[0,0],
            "inclination":[0,0],
            "commit":33,
            "pullID":42
        }
    }

//renders



function senterDrow(index){
    centerReset();

    var Branch_temp = document.createElementNS('http://www.w3.org/2000/svg','line');
    Branch_temp.setAttribute('x1',centerX);
    Branch_temp.setAttribute('y1',centerY * 0.05);
    Branch_temp.setAttribute('x2',centerX);
    Branch_temp.setAttribute('y2',centerY * 0.95);
    Branch_temp.setAttribute('stroke','brown');

    if(index > 100){
        Branch_temp.setAttribute('stroke-width', 100);
    }
    else{
        Branch_temp.setAttribute('stroke-width', index);
    }
    
    Branch_temp.setAttribute('data-id',`${i}`);


    console.log("SetDrow");
    // console.log(`index:${index}\ncenterX:${centerX}\n`)
}

const setTree = () => {
    return (-1 + (getRandomInt(0,2) * 2)) * getRandomInt(centerX * 0.4,centerX * 0.85);
} 

function RandomSetPM(mix,max){
    return (-1 + (getRandomInt(0, 2) * 2));
} 

// svg_s = document.getElementById("drow");

const tree_mix_high = centerY * 2 * Mix_Y;
const tree_max_high = centerY * 2 * Max_Y;
let tree_high = 0
let ste = []
start_pos = [0,0]
end_pos = [0,0]

//ランダムにメインの枝に突き刺すところから変更させてたい
function settingTree(count){
    for(let i = 0; i < count; i++){
        var Branch_temp = document.createElementNS('http://www.w3.org/2000/svg','line');
        
        centerReset();
        
        
        tree_high = getRandomInt(tree_mix_high, tree_max_high);
        start_pos = [centerX + (RandomSetPM() * 10) * 3, tree_high];
        console.dir(start_pos);
        console.log(`${centerX} + ${(RandomSetPM() * 10)} * 3, ${tree_high}`);

        end_pos = [centerX + setTree(), tree_high - (getRandomInt(0,10) * 20)];
        console.dir(end_pos);
        console.log(`${centerX} + ${setTree()}, ${tree_high} - (${getRandomInt(0,10)} * 20)`);
        PullrequestManager[i]["end_pos"] = [end_pos[0],end_pos[1]];
        

        // console.log(`startPos:${start_pos[0]}\nend_Pos:${tree_high - (getRandomInt(0,10) * 20)}\n`);
        //             NaN          NaN           NaN                 ok                ok
        console.log(`${centerX} + ${setTree()}, ${tree_high} - (${getRandomInt(0,10)} * ${20})`)


        Branch_temp.setAttribute('x1',start_pos[0]);
        Branch_temp.setAttribute('y1',start_pos[1]);
        Branch_temp.setAttribute('x2',end_pos[0]);
        Branch_temp.setAttribute('y2',end_pos[1]);
        Branch_temp.setAttribute('stroke','brown');
        Branch_temp.setAttribute('stroke-width',3);
        Branch_temp.setAttribute('data-id',`${i}`);

        svg_canvas.appendChild(Branch_temp);
    }

    console.log(`PullRequestManager`);
    console.dir(PullrequestManager);
}

function settingLeef(count,leef_range){
    for(let i = 0; i < count; i++){
        centerReset();
        
        set_pos = [PullrequestManager[i]["end_pos"][0], PullrequestManager[i]["end_pos"][1]]
        
        //ランダムに枝の先端に生成させている
        for(let l = 0;l<leef_range;l++){
            // ctx.fillRect((set_pos[0]+ (RandomSetPM() * getRandomInt(2,20))), (set_pos[1] + (RandomSetPM() * getRandomInt(5,20))), 10, 10);//parameter
        }
    }
    
    console.log(`PullRequestManager`);
    console.dir(PullrequestManager,10);
}



/* sennter
tree

 */

/* 
枝の先から特定の長さの場所まで葉っぱをつける
枝に対してBranch情報を入力する

*/




//Drow Test

window.addEventListener('DOMContentLoaded', ()=> {
    SettingMaxSizeDisplay();
    
    //GET Date    
    const SettingTrees = Object.keys(PullrequestManager).length
    console.log(`SettingTree:${SettingTrees}`);

    // senterDrow(treeManager["main"]["commit"]);
    settingTree(SettingTrees);
    settingLeef(SettingTrees,treeManager["main"]["commit"]/100000);
    // window.location.reload();//遊び
    document.body.appendChild(svg_canvas);
});



window.addEventListener('resize', SettingMaxSizeDisplay);


//ClickEvents
svg_canvas.addEventListener("click",(event) => {
    /* どんなものなのでしょうか? */
    console.log(event.target.getAttribute("data-id"));
    console.dir(PullrequestManager[parseInt(event.target.getAttribute("data-id"),10)]);
});