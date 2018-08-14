//思路：保存各色砖块有多少块

let line;
while (line = readline()) {
    let res =  count(line);
    print(res);
}


function count(str) {
    if (!str) {
        return 0;
    }
    let arr = [];//记录有几种颜色的砖块，每种多少个
    for (let i = 0; i < str.length; i++) {
        if (arr.indexOf(str[i]) === -1) {
            arr.push(str[i]);
        }
    }

    if (arr.length === 2) {
        return 2;
    } else if (arr.length === 1) {
        return 1;
    } else {
        return 0;
    }
}