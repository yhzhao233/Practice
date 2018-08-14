//整理房间，未完
let n;
// while (n = readline()) {
//     n = parseInt(n);
//     let heap = [];
//     for (let i = 0; i < n; i++) {
//         let all = [];
//         for (let j = 0; j < 4; j++) {
//             let lines = readline();
//             lines = strToArr(lines);
//             let p = new Point(lines[0], lines[1], lines[2], lines[3]);
//             all.push(p);
//         }
//         heap.push(all);
//     }
// }


function Point(x, y, a, b) {
    this.x = x;
    this.y = y;
    this.center = [a, b];
}

//判断是否正方形,四边相等且对角线相等
function isSquare(a, b, c, d) {
    let len = [];
    let point = [a, b, c, d];
    for (let i = 0; i < 4; i++) {
        for (let j = i + 1; j < 4; j++) {
            len.push(getLength(point[i], point[j]));
        }
    }
    len.sort((a, b) => a - b);
    for (let i = 1; i < 4; i++) {
        if (len[i] !== len[i - 1]) {
            return false;
        }
    }
    if (len[4] === len[3] || len[4] !== len[5]) {
        return false;
    }
    return true;
}


function getLength(a, b) {
    return Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2);
}

function strToArr(str) {
    return str.split(' ').map((v) => parseInt(v));
}
