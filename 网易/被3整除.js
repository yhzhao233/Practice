//思路：构造left->right的数，对每个数检查是否可以被3整除，可能越界，大数问题，用字符串

function dividedBy3(left, right) {
    if (left < 1 || left > right || right > 1e9) {
        return null;
    }

    let str = '';
    let count = 0;
    for (let i = 1; i <= right; i++) {
        str += i;
        if (i >= left) {
            if (check(str) === 1) {
                count++;
            }
        }
    }
    return count;
}

function check(str) {
    let arr = str.split('').map((v) => parseInt(v));
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    if (sum % 3 === 0) {
        return 1;
    }
    return 0;
}

var line;
while(line = readline()){
    let lines = line.split(' ');
    let left = parseInt(lines[0]);
    let right = parseInt(lines[1]);
    let count = dividedBy3(left, right);
    print(count);
}


//思路：范围过大，所以快捷方式找规律，找被 3 整除的数即找模3余 0 的数，有规律 100 重复

function dividedBy3_new(left, right) {
    if (left < 1 || left > right || right > 1e9) {
        return null;
    }


    let sum = count(right) - count(left - 1);

    return sum;
}

function count(n) {
    if (n % 3 === 2) {
        return 2 * Math.floor(n / 3) + 1;
    } else {
        return 2 * Math.floor(n / 3);
    }
}