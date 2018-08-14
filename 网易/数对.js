var line;
while (line = readline()) {
    let lines = line.split(' ');
    let n = parseInt(lines[0]);
    let k = parseInt(lines[1]);
    let res = count(n, k);
    if (res !== null) {
        print(res);
    }
}

function count(n, k) {
    if (n < 1 || n > 1e5 || k < 0 || k > n - 1) {
        return null;
    }
    if (k === 0) {
        return n * n;
    }

    let sum = 0;
    for (let i = k + 1; i <= n; i++) {
        sum += Math.floor(n / i) * (i - k);
        if (n % i >= k) {
            sum += Math.max(0, n % i - k + 1);
        }
    }
    return sum;
}
