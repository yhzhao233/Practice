//思路：用数组记录每列有几块
let line;
while (line = readline()){
    line = line.split(' ');
    let n = parseInt(line[0]);
    let m = parseInt(line[1]);
    let lines = readline();
    lines = lines.split(' ').map((v) => parseInt(v));
    let res = count(n, m, lines);
    print(res);
}

function count(n, m, lines) {
    if (n < 1 || m < 1 || m > 1000 || n > 1000 || !lines) {
        return;
    }
    let arr = new Array(n).fill(0);
    for (let i = 0; i < m; i++) {
        if (lines[i] < 1 || lines[i] > n) {
            return;
        }
        arr[lines[i] - 1]++;
    }
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}