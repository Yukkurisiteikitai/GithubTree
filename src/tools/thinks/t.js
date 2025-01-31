/**
 * 角度と長さから座標を特定する
 * @param {*} x0 原点のx座標
 * @param {*} y0 原点のy座標
 * @param {*} length 枝の長さ
 * @param {*} angleDeg 角度
 * @returns 
 */
function bowSetPoint(x0, y0,angleDeg,length){
    // function polarToCartesian(x0, y0, length, angleDeg) {
    let angleRad = (angleDeg * Math.PI) / 180; // 角度をラジアンに変換
    let x = x0 + length * Math.cos(angleRad);
    let y = y0 + length * Math.sin(angleRad);
    return [ x, y ];
}

function checkBlock(start_pos, end_pos) {
    let temp_x = start_pos[0] - end_pos[0];
    let temp_y = start_pos[1] - end_pos[1];
    let addPoint = temp_y / temp_x; // 傾き (m)
    let startAdd = start_pos[1] - (addPoint * start_pos[0]); // 切片 (b)
    return {
        "addPoint": addPoint,
        "startAdd": startAdd,
        "start": start_pos,
        "end": end_pos
    };
}

function isIntersect(line1, line2) {
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


function settingTree(count){
    
    for(let i = 0; i < count; i++){
        // init
        var Branch_temp = document.createElementNS('http://www.w3.org/2000/svg','line');
        centerReset();
        
        
        // 高さを設定
        tree_high = getRandomInt(tree_mix_high, tree_max_high);
        tree_length = getRandomInt(10,30);

        
        start_pos = [centerX + (RandomSetPM() * 10) * 3, tree_high];
        end_pos = [centerX + setTree(), tree_high - (getRandomInt(0,10) * 20)];

        
        // console.dir(start_pos);
        // console.log(`${centerX} + ${(RandomSetPM() * 10)} * 3, ${tree_high}`);
        // console.dir(end_pos);
        // console.log(`${centerX} + ${setTree()}, ${tree_high} - (${getRandomInt(0,10)} * 20)`);
        PullrequestManager[i]["end_pos"] = [end_pos[0],end_pos[1]];


        

        Branch_temp.setAttribute('x1',start_pos[0]);
        Branch_temp.setAttribute('y1',start_pos[1]);
        Branch_temp.setAttribute('x2',end_pos[0]);
        Branch_temp.setAttribute('y2',end_pos[1]);
        Branch_temp.setAttribute('stroke','brown');
        Branch_temp.setAttribute('stroke-width',3);
        Branch_temp.setAttribute('data-id',`${i}`);

        svg_canvas.appendChild(Branch_temp);
    }




}