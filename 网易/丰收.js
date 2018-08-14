//思路：记录到每堆苹果时的最大数量
let line;
while (line = readline()) {
    let n = parseInt(line);
    let a = readline();
    a = strToArr(a);
    let m = readline();
    m = parseInt(m);
    let q = readline();
    q = strToArr(q);

    let res = inWhich(n, a, m, q);
    for (let i = 0; i < res.length; i++) {
        print(res[i]);
    }
}

function inWhich(n, a, m, q) {
    if (n < 1 || m < 1 || n > 100000 || m > 100000 || !a || !q) {
        return;
    }

    let record = [];
    let cur = 0;
    let res = [];
    for (let i = 0; i < n; i++) {
        if (a[i] < 1 || a[i] > 1000) {
            return;
        }
        cur += a[i];
        record.push(cur);
    }

    for (let i = 0; i < m; i++) {
        res.push(find(0, n, q[i], record));
    }

    return res;
}

function strToArr(str) {
    return str.split(' ').map((v) => parseInt(v));
}

function find(low, high, target, arr) {
    if (low === high) {
        return high + 1;
    }
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
        return mid + 1;
    } else if (arr[mid] < target) {
        return find(mid + 1, high, target, arr);
    } else {
        return find(low, mid, target, arr);
    }
}


var n = 5;
var a = strToArr('2 7 3 4 9');
var m = 3;
var q = strToArr('1 25 11');

var res = inWhich(n, a, m, q);