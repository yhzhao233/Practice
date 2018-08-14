//思路：计算最后左转/右转的次数，计算方向

var line = [];
while (line = readline()) {
    let n = parseInt(line);
    let str = readline();
    let res = direction(n, str);
    print(res);
}

function direction(n, str) {
    if (str === null || n !== str.length || n > 1000) {
        return 0;
    }
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (str[i] === 'L' || str[i] === 'l') {
            count--;
        } else if (str[i] === 'R' || str[i] === 'r') {
            count++;
        } else {
            return 0;
        }
    }
    let res;
    if (count >= 0) {
        switch (count % 4) {
            case 0:
                res = 'N';
                break;
            case 1:
                res = 'E';
                break;
            case 2:
                res = 'S';
                break;
            case 3:
                res = 'W';
                break;
        }
    }

    if (count < 0) {
        count = -count;
        switch (count % 4) {
            case 0:
                res = 'N';
                break;
            case 1:
                res = 'W';
                break;
            case 2:
                res = 'S';
                break;
            case 3:
                res = 'E';
                break;
        }
    }
    return res;
}