let div = document.getElementById("output");
let btn = document.getElementById("btn");
let input = document.getElementById("ip");

btn.onclick = function () {
    let num = Number(input.value);

    new Promise((resolve) => {
        setTimeout(() => resolve(num), 2000);
    })
    .then((res) => {
        div.innerText = "Result: " + res;
        return new Promise(resolve => {
            setTimeout(() => resolve(res * 2), 1000);
        });
    })
    .then((res) => {
        div.innerText = "Result: " + res;
        return new Promise(resolve => {
            setTimeout(() => resolve(res - 3), 1000);
        });
    })
    .then((res) => {
        div.innerText = "Result: " + res;
        return new Promise(resolve => {
            setTimeout(() => resolve(res / 2), 1000);
        });
    })
    .then((res) => {
        div.innerText = "Result: " + res;
        return new Promise(resolve => {
            setTimeout(() => resolve(res + 10), 1000);
        });
    })
    .then((res) => {
        div.innerText = "Final Result: " + res;
    });
};