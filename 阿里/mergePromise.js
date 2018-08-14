const timeout = ms => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, ms);
});

const ajax1 = () => timeout(2000).then(() => {
    console.log('1');
    return 1;
});

const ajax2 = () => timeout(1000).then(() => {
    console.log('2');
    return 2;
});

const ajax3 = () => timeout(2000).then(() => {
    console.log('3');
    return 3;
});

const mergePromise = ajaxArray => {
    // 在这里实现你的代码
    let data = [];
    let pro = Promise.resolve();
    for (let i = 0; i < ajaxArray.length; i++) {
        pro = pro.then(ajaxArray[i])
            .then(function (num) {
            data.push(num);
            return data;
        })
    }
    return pro;
};

mergePromise([ajax1, ajax2, ajax3]).then(data => {
    console.log('done');
    console.log(data); // data 为 [1, 2, 3]
});

//先定义一个已完成的 Promise, 就可直接执行 then 中的回调函数，回调函数返回一个值，then返回的Promise对象
//变为完成态，并将值作为下一个 promise 对象接受状态回调函数的参数
//因为下一个 Promise 不需要执行参数，所以 return data 不影响。 直到最后一步 data 作为 mergePromise.then()
//的参数，输出，完成


// var promise = new Promise(function(resolve, reject) {
//     throw new Error('fuck');
// });
//
// promise.catch(function (error) {
//     console.log(error.message);
// })
//
// var rejected;
//
// window.onunhandledrejection = function (event) {
//     console.log(event.type);
//     console.log(event.reason.message);
//     console.log(rejected === event.promise);
// };
//
// window.onrejectionhandled = function (event) {
//     console.log(event.type);
//     console.log(event.reason.message);
//     console.log(rejected === event.promise);
// };
//
//
// rejected = Promise.reject(new Error('Explosion!'));
// rejected.catch(function (value) {
//     console.log(value);
// });
//
//
// let p1 = new Promise(function (resolve, reject) {
//     resolve(42);
// });
//
// p1.then(function (value) {
//     console.log(value);
// }).then(function () {
//     console.log("Finished");
// });
