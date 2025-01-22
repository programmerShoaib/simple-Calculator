let a = document.getElementById("num1");
let b = document.getElementById("num2");
let add = document.getElementById("add");
let sub = document.getElementById("sub");
let mul = document.getElementById("mul");
let div = document.getElementById("div");
let result = document.getElementById("result");

add.addEventListener("click", () => {   
    result.innerHTML = Number(a.value) + Number(b.value);
});

sub.addEventListener("click", () => {
    result.innerHTML = Number(a.value) - Number(b.value);
});

mul.addEventListener("click", () => {
    result.innerHTML = Number(a.value) * Number(b.value);
});

div.addEventListener("click", () => {
    result.innerHTML = Number(a.value) / Number(b.value);
});
