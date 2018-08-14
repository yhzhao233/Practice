//排列组合
//数学计算方法

let line;
while (line = readline()) {
    line = line.split(' ').map((v) => parseInt(v));
    let n = line[0];
    let m = line[1];
    let k = line[2];
    let res = sortDic(n, m, k);
    print(res);
}

function dic(n, m, k) {
    if (n < 1 || m < 1 || n > 100 || m > 100) {
        return -1;
    }
    let x = [];
    while (n && m) {
        let count = 1;
        if (n < 1 || m < 1 || n > 100 || m > 100) {
            return -1;
        }
        for (let i = 0; i < n - 1; i++) {
            count *= n - 1 + m - i;
            count = Math.floor(count / (i + 1));
            if (count > k) break;
        }
        if (k <= count) {
            x.push('a');
            n--;
        } else {
            x.push('z');
            m--;
            k -= count;
        }
    }

    if (k !== 1) {
        return -1;
    }
    while (n--) {
        x.push('a');
    }
    while (m--) {
        x.push('z');
    }

    return x.join('');
}

var res = dic(100,100, 1000000000);


//按顺序变换到第k个，字符串很长 k很大时效率低
//
// function sortDic(n, m, k) {
//     let arr = [];
//     for (let i = 0; i < n; i++) {
//         arr.push('a');
//     }
//     for (let i = 0; i < m; i++) {
//         arr.push('z');
//     }
//     for (let i = 1; i < k; i++) {
//         for (let j = n + m - 1; j > 0; j--) {
//             if (arr[j] > arr[j - 1]) {
//                 Swap(j - 1, j, arr);
//                 arr = Sort(j, n + m - 1, arr);
//                 break;
//             }
//         }
//     }
//     return arr.join('');
// }
//
// function Swap(a, b, arr) {
//     let temp = arr[a];
//     arr[a] = arr[b];
//     arr[b] = temp;
// }
//
// function Sort(start, end, arr) {
//     let temp = arr.splice(start, end);
//     temp.sort();
//     return arr.concat(temp);
// }