const svg_canvas = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg_canvas.setAttribute("id", "drow");
svg_canvas.setAttribute("width", "1500");
svg_canvas.setAttribute("height", "900");

// 説明は src/thinks/printTreeREADME.md
// propaty

const canvasX_size = 1500;
const canvasY_size = 900;

let centerX = svg_canvas.width.animVal.valueAsString / 2;
let centerY = svg_canvas.height.animVal.valueAsString / 2;

svg_canvas.width = canvasX_size;
svg_canvas.height = 900;

function centerReset() {
    centerX = canvasX_size / 2;
    centerY = canvasY_size / 2;
    console.log(`centerReset\n X:${centerX}\nY:${centerY}`);
}
let TreeBow = []


const Mix_Y = 0.2
const Max_Y = 0.6
let issuessManager = {
    "count": 2,
    "discassion": 24
}

let treeManager = {
    "main": {
        "end_pos": [60, 423],
        "commit": 3452
    },
    "v0.1": {
        "end_pos": [24, 57],
        "commit": 32
    }
}

let PullrequestManager = {
    "helloWold": {
        "end_pos": [0, 0],
        "commit": 3
    }
}


// testDates GET(linux)


treeManager = {
    "main": {
        "end_pos": [60, 423],
        "commit": 1324544,
        "issuess": 0,

    },

    "v0.1": {
        "end_pos": [24, 57],
        "commit": 32,
        "isuess": 2
    }
}

PullrequestManager = {
    0: {
        "title": "Updated README.md file with other missing components highlighted.",
        "next_pos": [343, 234],
        "commit": 17,
        "pullID": 4
    },
    1: {
        "title": "bugfix: updated tutorial002_py310.py for tax=0 situation",
        "next_pos": [343, 234],
        "commit": 20,
        "pullID": 3
    },
    2: {
        "title": "🌐 Add Russian translation for docs/ru/docs/advanced/async-tests.md  approved-1 lang-all lang-ru",
        "next_pos": [343, 234],
        "commit": 3,
        "pullID": 22
    },
    3: {
        "title": "🌐 Add Japanese translation for docs/ja/docs/environment-variables.md  awaiting-review lang-all lang-ja#13226 opened 3 days ago by k94-ishi",
        "next_pos": [343, 234],
        "commit": 16,
        "pullID": 21
    },
    4: {
        "title": "✅ Simplify tests for: test_testing_dependencies",
        "next_pos": [343, 234],
        "commit": 20,
        "pullID": 15
    },
    5: {
        "title": "✅ Simplify tests for: test_testing  refactor⬆️ Upgrade python-multipart to >=0.0.18 upgrade#13219 opened 4 days ago by DanielKusyDev",
        "next_pos": [343, 234],
        "commit": 14,
        "pullID": 8
    },
    6: {
        "title": " 2",
        "next_pos": [343, 234],
        "commit": 17,
        "pullID": 13
    },
    7: {
        "title": "✅ Simplify tests for: test_query_params_str_validations",
        "next_pos": [343, 234],
        "commit": 19,
        "pullID": 9
    },
    8: {
        "title": "🌐 Update Portuguese Translation for docs/pt/docs/tutorial/request-forms.md  approved-1 lang-all lang-pt",
        "next_pos": [343, 234],
        "commit": 13,
        "pullID": 14
    },
    9: {
        "title": "test openapi schema output with separate_input_output_schemas=False",
        "next_pos": [343, 234],
        "commit": 7,
        "pullID": 1
    },
    10: {
        "title": "🐛 Fix parameter models with alias ",
        "next_pos": [343, 234],
        "commit": 17,
        "pullID": 13
    },
    11: {
        "title": "🔧 Add Pydantic 2 trove classifier ",
        "next_pos": [343, 234],
        "commit": 14,
        "pullID": 11
    },
    12: {
        "title": "🌐 Add Arabic translation for docs/ar/docs/index.md  awaiting-review lang-all lang-ar",
        "next_pos": [343, 234],
        "commit": 14,
        "pullID": 5
    },
    13: {
        "title": "✅ Simplify tests for request_files",
        "next_pos": [343, 234],
        "commit": 13,
        "pullID": 6
    },
    14: {
        "title": "update pytest asyncio test added lifespan and update docs ",
        "next_pos": [343, 234],
        "commit": 18,
        "pullID": 3
    },
    15: {
        "title": "🌐 Add Russian translation for docs/ru/docs/tutorial/bigger-applications.md ",
        "next_pos": [343, 234],
        "commit": 7,
        "pullID": 10
    },
    16: {
        "title": "approved-1 lang-all lang-ru",
        "next_pos": [343, 234],
        "commit": 3,
        "pullID": 10
    },
    17: {
        "title": "dependencies internal python",
        "next_pos": [343, 234],
        "commit": 3,
        "pullID": 0
    },
    18: {
        "title": "⬆ Update httpx requirement from <0.28.0,>=0.23.0 to >=0.23.0,<0.29.0 ",
        "next_pos": [343, 234],
        "commit": 18,
        "pullID": 1
    },
    19: {
        "title": " dependencies internal python",
        "next_pos": [343, 234],
        "commit": 16,
        "pullID": 1
    },
    20: {
        "title": "Update anyio in requirements-tests.txt ",
        "next_pos": [343, 234],
        "commit": 12,
        "pullID": 4
    },
    21: {
        "title": "• Draft",
        "next_pos": [343, 234],
        "commit": 7,
        "pullID": 19
    },
    22: {
        "title": "⬆️ Bump starlette to allow up to 0.45.0 ",
        "next_pos": [343, 234],
        "commit": 4,
        "pullID": 14
    },
    23: {
        "title": "⬆ Allow httpx 0.28.x, relax pins ",
        "next_pos": [343, 234],
        "commit": 10,
        "pullID": 21
    },
    24: {
        "title": "fix: bugfix/openapi/header_params_model ",
        "next_pos": [343, 234],
        "commit": 15,
        "pullID": 10
    },
}


//tool

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // 上限は除き、下限は含む
}

function defalt_treeManageValue() {
    return { "v0.1": { "start_high": 34, "end_pos": [24, 57], "commit": 32 } }
}

svg_canvas.addEventListener("click", (c) => {
    console.log(c.offsetX, c.offsetY);
    console.log(`offsetX:${c.offsetX},\n 
        offsetY:${c.offsetY}\n
        X_size:${c.offsetX / svg_canvas.width.animVal.valueAsString}\n
        Y_size:${c.offsetY / svg_canvas.height.animVal.valueAsString}`);
});



console.log(svg_canvas.getBoundingClientRect());


function SettingMaxSizeDisplay() {
    console.log(`nowSize\n canvas.height:${svg_canvas.height.animVal.valueAsString}\n canvas.width:${svg_canvas.width.animVal.valueAsString}`);
    console.log("[Scuess]Load-CanvasSize");
}


const onRepaintCanvas = function () {
    console.log('repaint');

    //const svg_canvas =  document.getElementById('drow');
    //const context = svg_canvas.getContext('2d');

    //context.fillStyle = 'red';
    //context.fillRect(0, 0, svg_canvas.width, svg_canvas.height);

    //context.fillStyle = 'blue';
    //context.fillRect(10, 10, svg_canvas.width-20, svg_canvas.height-20);
};



treeManager = {
    "main": {
        "s_pos": [0, 0],
        "e_pos": [0, 0],
        "inclination": [0, 0],
        "commit": 33,
        "pullID": 42
    }
}

//renders


getRandomInt(0, 10);

function senterDrow(index) {
    centerReset();

    var Branch_temp = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    Branch_temp.setAttribute('x1', centerX);
    Branch_temp.setAttribute('y1', centerY * 0.05);
    Branch_temp.setAttribute('x2', centerX);
    Branch_temp.setAttribute('y2', centerY * 0.95);
    Branch_temp.setAttribute('stroke', 'brown');

    if (index > 100) {
        Branch_temp.setAttribute('stroke-width', 100);
    }
    else {
        Branch_temp.setAttribute('stroke-width', index);
    }

    Branch_temp.setAttribute('data-id', `${i}`);


    console.log("SetDrow");
    //console.log(`index:${index}\ncenterX:${centerX}\n`)
}

const setTree = () => {
    return (-1 + (getRandomInt(0, 2) * 2)) * getRandomInt(centerX * 0.4, centerX * 0.85);
}

function RandomSetPM(mix, max) {
    return (-1 + (getRandomInt(0, 2) * 2));
}

//svg_s = document.getElementById("drow");

const tree_mix_high = centerY * 2 * Mix_Y;
const tree_max_high = centerY * 2 * Max_Y;
let tree_high = 0
let ste = []
start_pos = [0, 0]
end_pos = [0, 0]



function setTreeSys(max, brake) {
    let temp_Branch = []
    //+ -    RandomSetPM() * 
    for (var t = 0; t < max; t++) {
        temp_Branch.push(t);
    }
}


// ランダムにメインの枝に突き刺すところから変更させてたい

/*

tree を交互にに方向を決める


方向
右 OR 左
+ OR -

基本的には伸びていくので
yは+でok

基本的にはyで上げていく


*/

image_tree = [
    [0, 4, 1, 4, 1, 3, 5],
    [0, 2, 5, 7, 2, 5],
    [2, 4, 7, 2, 9, 1]
]

/**
 * 角度と長さから座標を特定する
 * @param {*} x0 原点のx座標
 * @param {*} y0 原点のy座標
 * @param {*} length 枝の長さ
 * @param {*} angleDeg 角度
 * @returns 
 */
function bowSetPoint(x0, y0, angleDeg, length) {
    // function polarToCartesian(x0, y0, length, angleDeg) {
    let angleRad = (angleDeg * Math.PI) / 180; // 角度をラジアンに変換
    let x = x0 + length * Math.cos(angleRad);
    let y = y0 + length * Math.sin(angleRad);
    return [x, y];
}


function checkBlock(start_pos, end_pos) {
    console.log(`${start_pos} , ${end_pos}`);
    let temp_x = end_pos[0] - start_pos[0];
    let temp_y = start_pos[1] - end_pos[1];
    let addPoint = temp_y / temp_x; // 傾き (m)
    let startAdd = start_pos[1] - (addPoint * start_pos[0]); // 切片 (b)
    return {
        "addPoint": parseInt(addPoint, 10),
        "startAdd": parseInt(startAdd, 10),
        "start": start_pos,
        "end": end_pos
    };
}


console.log(checkBlock(start_pos = [2, 4], end_pos = [5, 3]));

/**
 * こちらはline1とline2が重複していないかをチェックするシステムである
 * @param {*} line1 1つの目の座標(x,y)
 * @param {*} line2 2つの目の座標(x,y)
 * @returns 
 */

function isIntersect(line1, line2) {
    console.log(`${line1} ${line2}`);
    let m1 = line1.addPoint;
    let b1 = line1.startAdd;
    let m2 = line2.addPoint;
    let b2 = line2.startAdd;

    // 平行（傾きが等しい）なら交差しない
    if (m1 === m2) return false;

    // 交点の x 座標を計算
    let x = (b2 - b1) / (m1 - m2);
    let y = m1 * x + b1;

    // 交点が各線分の範囲内にあるかを確認
    function isWithinBounds(point, start, end) {
        return (
            Math.min(start[0], end[0]) <= point[0] &&
            point[0] <= Math.max(start[0], end[0]) &&
            Math.min(start[1], end[1]) <= point[1] &&
            point[1] <= Math.max(start[1], end[1])
        );
    }

    let intersection = [x, y];
    return isWithinBounds(intersection, line1.start, line1.end) &&
        isWithinBounds(intersection, line2.start, line2.end);
}

function settingTree(count, spilte) {
    /*
    

    */
    let countID = 0

    console.log(`${centerX}, ${centerY} + ${getRandomInt(1, 20)}`);
    console.log(`${centerX} + ${getRandomInt(20, 41)} * ${RandomSetPM()}, ${centerY}+ ${getRandomInt(1, 20)}`);
    let start_pos = [centerX, centerY + getRandomInt(1, 20)];
    let end_pos = [centerX + getRandomInt(20, 41) * RandomSetPM(), centerY + getRandomInt(1, 20)];

    let now_rot = 0 // 0 が左 1が 右

    //反転
    now_rot = now_rot + (now_rot * -1);


    //角度(↑を角度の中心として認識する)
    let SetTree_angle = 0;
    //長さ
    let Branch_lenght = 0;

    //


    /**
     *  [x,y,深度]
     * @param 深度 どこまでやるのか?
     */
    let tree_pos = [[9, 3, 0]]
    let tempCheckTreePos = [[0,2],[2,3]]

    function AddSetting() {
        // console.log(`isIntersect(line1 = checkBlock[${start_pos[0]}, ${start_pos[0]}], line2 = checkBlock${[end_pos[0], end_pos[1]]})`)
        tree_high = getRandomInt(tree_mix_high, tree_max_high);
        start_pos = [centerX, tree_high];
        // set
        Branch_lenght = getRandomInt(20, 69);
        SetTree_angle = getRandomInt(40, 90) * now_rot;
        end_pos = bowSetPoint(x0 = start_pos[0], y0 = start_pos[1] * (getRandomInt(3, 8) * 0.1),angleDeg=SetTree_angle,length=SetTree_angle);
        end_pos = [parseInt(end_pos[0],10),parseInt(end_pos[1],10)];
        console.log(`end_pos:${end_pos}`);

        console.log(`dataaSetting:\nBrnach_lengh:${Branch_lenght}\nSetTree_angle:${SetTree_angle}\n`);
        // with (isIntersect(line1 = checkBlock(start_pos[0], start_pos[0]), line2 = checkBlock(end_pos[0], end_pos[1])) {
        tree_high = getRandomInt(tree_mix_high, tree_max_high);
        start_pos = [centerX, tree_high];
        // set
        Branch_lenght = getRandomInt(20, 69);
        SetTree_angle = getRandomInt(40, 90) * now_rot;
        end_pos = bowSetPoint(x0 = start_pos[0], y0 = start_pos[1] * (getRandomInt(3, 8) * 0.1));
        end_pos = [parseInt(end_pos[0],10),parseInt(end_pos[1],10)];
        console.log(`dataaSetting:\nBrnach_lengh:${Branch_lenght}\nSetTree_angle:${SetTree_angle}\n`);
        // }
        setTree(s_p=[start_pos[0],start_pos[1]],end_pos[end_pos[0],end_pos[1]]);
        
        console.log("StartSetting:ok");

        
    }

    /**
     * 進む命令をする
     * @param {*} s_pos 枝のどこからスタートするのか?
     */


    function goSetting(s_pos) {
        while(true)
        {
            tree_high = getRandomInt(tree_mix_high, tree_max_high);
            start_pos = [s_pos[0], s_pos[1]];
            // set
            Branch_lenght = getRandomInt(20, 69);
            SetTree_angle = getRandomInt(40, 90) * now_rot;
            end_pos = bowSetPoint(x0 = start_pos[0], y0 = start_pos[1] * (getRandomInt(3, 8) * 0.1));
            console.log(`dataaSetting:\nBrnach_lengh:${Branch_lenght}\nSetTree_angle:${SetTree_angle}\n`);
            
            //check While True
            if (isIntersect(
                line1 = checkBlock([
                    start_pos = [s_pos[0], s_pos[1]], 
                    end_pos = [end_pos[0], end_pos[1]]
                ]),
                line2 = checkBlock([
                    start_pos = [tempCheckTreePos[0][0], tempCheckTreePos[0][1]],
                    end_pos = [tempCheckTreePos[1][0], tempCheckTreePos[1][1]]
                ])
            )){
                break;//関数で終わるならw
                // return 0
            }

        }
    }

    AddSetting();
    // goSetting([end_pos[0], end_pos[1]]);

    /*
        戻る back
        進む go
        新規 add
    */
    // let setDates


    function setTree(s_p,e_p) {
        console.log(`${s_p}, ${e_p}`)
        var Branch_temp = document.createElementNS('http://www.w3.org/2000/svg','line');
        Branch_temp.setAttribute('x1', s_p[0]);
        Branch_temp.setAttribute('y1', s_p[1]);
        Branch_temp.setAttribute('x2', e_p[0]);
        Branch_temp.setAttribute('y2', e_p[1]);
        Branch_temp.setAttribute('stroke', 'brown');
        Branch_temp.setAttribute('stroke-width', 3);
        Branch_temp.setAttribute('data-id', `${countID}`);
        var Branch_temp = document.createElementNS('http://www.w3.org/2000/svg', 'line');

        countID += 1;

        svg_canvas.appendChild(Branch_temp)

    }






    //Block上にいるかどうかを確認する//1500*900のリストに座標で1があるかどうかを先にチェックするみたいな仕組みにすればいける?
    //もし重なりそうになったらそれを重ならないようにずらしたやつにずらす方向にランダムに補正を加えるを(チェック)にとおるまで繰り返す
    // if (isIntersect(HeiJoney_s, comeWy_s) != true) {

    // }

    console.log(`PullRequestManager`);
    console.dir(PullrequestManager);

}

function settingLeef(count, leef_range) {
    for (let i = 0; i < count; i++) {
        centerReset();

        set_pos = [PullrequestManager[i]["end_pos"][0], PullrequestManager[i]["end_pos"][1]]

        //ランダムに枝の先端に生成させている
        for (let l = 0; l < leef_range; l++) {
            // ctx.fillRect((set_pos[0]+ (RandomSetPM() * getRandomInt(2,20))), (set_pos[1] + (RandomSetPM() * getRandomInt(5,20))), 10, 10);//parameter
        }
    }

    console.log(`PullRequestManager`);
    console.dir(PullrequestManager, 10);
}

/*
function toolRender(cV) {
    var Branch_temp = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    let cut = parseInt(cV, 10);
    let color = "black";



    for (let x = 0; x < canvasX_size / cut; x++) {
        Branch_temp = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        Branch_temp.setAttribute('x1', x * cut);
        Branch_temp.setAttribute('y1', 0);
        Branch_temp.setAttribute('x2', x * cut);
        Branch_temp.setAttribute('y2', canvasY_size);
        Branch_temp.setAttribute('stroke', color);
        Branch_temp.setAttribute('stroke-width', 1);
        Branch_temp.setAttribute('data-id', `helloWorld${x}`);

        svg_canvas.appendChild(Branch_temp);
        console.log(`x:${x}\nw${canvasX_size / cut}`);
    }
    for (let y = 0; y < canvasY_size / cut; y++) {
        Branch_temp = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        Branch_temp.setAttribute('x1', 0);
        Branch_temp.setAttribute('y1', y * cut);
        Branch_temp.setAttribute('x2', canvasX_size);
        Branch_temp.setAttribute('y2', y * cut);
        Branch_temp.setAttribute('stroke', color);
        Branch_temp.setAttribute('stroke-width', 1);
        Branch_temp.setAttribute('data-id', `helloWorld${y}`);
        svg_canvas.appendChild(Branch_temp);
        console.log(`y:${y}\nw${canvasY_size / cut}`);
    }
}
*/

/* sennter
tree

 */

/* 
枝の先から特定の長さの場所まで葉っぱをつける
枝に対してBranch情報を入力する

*/




//Drow Test

window.addEventListener('DOMContentLoaded', () => {
    SettingMaxSizeDisplay();

    //GET Date    
    const SettingTrees = Object.keys(PullrequestManager).length
    console.log(`SettingTree:${SettingTrees}`);
    // toolRender(10);
    // senterDrow(treeManager["main"]["commit"]);
    settingTree(SettingTrees, 3);
    // settingLeef(SettingTrees,treeManager["main"]["commit"]/100000);
    // window.location.reload();//遊び
    document.body.appendChild(svg_canvas);
});



window.addEventListener('resize', SettingMaxSizeDisplay);


//ClickEvents
svg_canvas.addEventListener("click", (event) => {
    /* どんなものなのでしょうか? */
    console.log(event.target.getAttribute("data-id"));
    console.dir(PullrequestManager[parseInt(event.target.getAttribute("data-id"), 10)]);
});