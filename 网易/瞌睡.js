

let line;
while (line = readline()) {
    line = strToArr(line);
    let n = line[0];
    let k = line[1];
    let a = readline();
    a = strToArr(a);
    let t = readline();
    t = strToArr(t);
    let res = getMax(n, k, a, t);
    print(res);
}


function getMax(n, k, a, t) {
    if (n < 1 || k < 0 || n > 100000 || k > 100000) {
        return;
    }
    let awake = 0;
    for (let i = 0; i < n; i++) {
        if (t[i] === 1) {
            awake += a[i];
        }
    }
    let call = 0;
    let max = 0;
    let flag = 0;
    for (let i = 0; i < n; i++) {
        call = 0;
        if (t[i] === 0) {
            for (let j = 0; j < k; j++) {
                if (t[i + j] === 0) {
                    call += a[i + j];
                }
                if (i + j === n - 1) {
                    flag = 1;
                    break;
                }
            }
            if (max < call) {
                max = call;
            }
            if (flag === 1) {
                break;
            }
        }
    }
    max += awake;
    return max;
}

function strToArr(str) {
    return str.split(' ').map((v) => parseInt(v));
}

var n = 10;
var k = 5;
var a = strToArr('6481 6127 4477 5436 7356 3137 1076 7182 8147 835');
var t = strToArr('1 0 1 0 1 1 0 0 0 1');
var res = getMax(n, k, a, t);