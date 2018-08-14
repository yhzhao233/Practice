//思路：先计算房租够不够f天，如果不够，则最多生活 d / x 天
//如果够，则扣除房租钱后，除以每天一个水果+房租

let line;
while (line = readline()) {
    let lines = line.split(' ');
    let x = parseInt(lines[0]);
    let f = parseInt(lines[1]);
    let d = parseInt(lines[2]);
    let p = parseInt(lines[3]);
    let res = countDays(x, f, d, p);
    print(res);
}



function countDays(x, f, d, p) {
    if (x < 1 || f < 1 || d < 1 || p < 1) {
        return false;
    }

    let firstdays = Math.floor(d / x);
    if (firstdays <= f) {
        return firstdays;
    }

    let remain = d - f * x;

    return Math.floor(remain / (p + x)) + f
}