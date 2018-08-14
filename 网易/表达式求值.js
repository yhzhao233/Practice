//思路：暴力解

let line;
while (line = readline()) {
    let lines = line.split(' ');
    let a = parseInt(lines[0]);
    let b = parseInt(lines[1]);
    let c = parseInt(lines[2]);
    let max = getMax(a, b, c);
    print(max);
}

function getMax(a, b, c) {
    if (a < 1 || b < 1 || c < 1 || a > 10 || b > 10 || c > 10) {
        return 0;
    }
    let max = 0;
    let temp = a + b + c;
    if (temp > max) {
        max = temp;
    }
    temp = a + b * c;
    if (temp > max) {
        max = temp;
    }
    temp = a * b + c;
    if (temp > max) {
        max = temp;
    }
    temp = (a + b) * c;
    if (temp > max) {
        max = temp;
    }
    temp = a * (b + c);
    if (temp > max) {
        max = temp;
    }
    temp = a * b * c;
    if (temp > max) {
        max = temp;
    }
    return max;
}
