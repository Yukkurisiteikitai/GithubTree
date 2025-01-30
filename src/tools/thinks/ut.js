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

const HeiJoney = {
    "start": { "x": 5, "y": 2 },
    "end": { "x": 7, "y": 6 }
};

const comeWy = {
    "start": { "x": 6, "y": 3 },
    "end": { "x": 7, "y": 8 }
};

const HeiJoney_s = checkBlock([HeiJoney.start.x, HeiJoney.start.y], [HeiJoney.end.x, HeiJoney.end.y]);
const comeWy_s = checkBlock([comeWy.start.x, comeWy.start.y], [comeWy.end.x, comeWy.end.y]);

console.log(isIntersect(HeiJoney_s, comeWy_s)); // 交差していれば true, 交差しなければ false
