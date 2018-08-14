//思路：从前向后，若出现重复则跳过

let line;
while (line = readline()) {
    let res =  staggered01(line);
    print(res);
}


function staggered01(str) {
    if (!str) {
        return 0;
    }
    let curLen = 0;
    let maxLen = 0;
    let start = 0;
    let len = str.length;
    while (start < len - 1) {
        let index = start + 1;
        curLen = 1;
        while (str[index] !== str[start] && index < len) {
            curLen++;
            index++;
            start++;
        }
        if (curLen > maxLen) {
            maxLen = curLen;
        }
        start = index;
    }
    return maxLen;
}