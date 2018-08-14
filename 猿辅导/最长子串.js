//一个一维维数组中只有1和-1，实现程序，求和为0的最长子串长度，并在注释中给出时间和空间复杂度。
//思路：从前向后扫，当已知和为2时终止子串

//动态规划解法

function maxSon(arr) {
    if (!arr) {
        return;
    }
    let max = 0;
    let length = arr.length;
    let dp = new Array(length);
    for (let i = 0; i < length; i++) {
        dp[i] = new Array(length);
    }

    for (let i = 1; i < length; i++) {
        dp[i - 1][i] = arr[i - 1] + arr[i];
        if (dp[i - 1][i] === 0) {
            max = 2;
        }
    }
    for (let len = 3; len < length; len += 2) {
        for (let i = 0, j; (j = i + len) < length; i++) {
            dp[i][j] = arr[i] + arr[j] + dp[i + 1][j - 1];
            if (dp[i][j] === 0) {
                max = Math.max(max, j - i + 1);
            }
        }
    }
    return max;
}

let arr = [-1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, -1, -1];

let max = maxSon(arr);


//从前往后算sum，并保存，如果后来的sum已存在，则索引之间部分即和为0的子串

function maxSon2(arr) {
    if (!arr) {
        return;
    }
    let h = {};
    let sum = 0;
    let max = 0;
    let curLen = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (h[sum] == null) {
            h[sum] = i;
        } else {
            if (sum === 0) {
                curLen = i + 1;
            } else {
                curLen = i - h[sum];
            }
            if (curLen > max) {
                max = curLen;
            }
        }
    }
    return max;
}

max = maxSon2(arr);