const canvas = document.getElementById('drow');
const ctx = canvas.getContext('2d');

let commit_values = 2
let canva_pos = [2,2]
let pullRequest = 34
let Disscussion = 32

// ctx.fillRect(25, 25, 100, 100);

750 



function draw() 
{
    
    if (canvas.getContext) {
      
  
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
          ctx.beginPath();
          const x = 25 + j * 50; // x 座標
          const y = 25 + i * 50; // y 座標
          const radius = 20; // 円弧の半径
          const startAngle = 0; // 円孤の始点
          const endAngle = Math.PI + (Math.PI * j) / 2; // 円孤の終点
          const counterclockwise = i % 2 !== 0; // 時計回りまたは反時計回り
  
          ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);
  
          if (i > 1) {
            ctx.fill();
          } else {
            ctx.stroke();
          }
        }
    }
}
}


function senterDrow(index){
    ctx.beginPath();
    ctx.lineWidth = index;
    ctx.moveTo(750, 0);
    ctx.lineTo(750, 876);
    ctx.closePath();
    ctx.stroke();
}
senterDrow(103);

/*
管理用のシステムはどんな仕組みにしますか?

Listでの管理を考えます
Json方式で

"main":{

枝の支店は木の中心なのでxは固定なので
"start_high":24,
"end_position":[60,86],
"commmit":35323

pullRequestは枝
""


}
 */



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



function settingTree(high){
    
}


/* sennter
tree 
 */




// var drawVerticalLine = function() {
//     ctx.beginPath();
//     ctx.moveTo(center.x, 0);
//     ctx.lineTo(center.x, csHeight);
//     ctx.closePath();
//     ctx.stroke();
//   };
// draw();