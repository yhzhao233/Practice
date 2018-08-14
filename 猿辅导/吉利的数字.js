//小明认为某些数字不吉利，付账时会尽可能少的多付一些钱，使得价格中不包含这些不吉利数字，并且不出现0.例如，不吉利数字为1，4，7，8，商品价格为1000，小明实际支付2222.实现程序，输入商品原来的价格price，不吉利数字集合unlucky_numbers，求小明付账时的价格lucky_price.



function getLuckyPrice(str) {
    if (!str) {
        return;
    }
    while (str.indexOf('0') > -1
    || str.indexOf('1') > -1
    || str.indexOf('4') > -1
    || str.indexOf('7') > -1
    || str.indexOf('8') > -1) {
        let carry = 0;
        str = str.split('').map((v) => parseInt(v));
        str[str.length - 1] += 1;
        for (let i = str.length - 1; i >= 0; i--) {
            if (carry === 1) {
                str[i] += carry;
                carry = 0;
                if (str[i] < 10) {
                    continue;
                }
            }
            if (str[i] >= 10) {
                str[i] = str[i] - 10;
                carry = 1;
                if (i === 0) {
                    str.unshift(0);
                    i++;
                }
            }
        }
        str = str.join('');
    }
    return str;
}


let res = getLuckyPrice('1000');