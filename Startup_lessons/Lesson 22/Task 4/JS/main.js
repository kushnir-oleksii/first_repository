let number = prompt("Entre value in km");
let metric = prompt("Перевести в m чи cm ?")
function KmToM(km) {
    return km * 1000;
}
function KmToCm(km) {
    return km * 100000;
}

while (+number <= 0 || !(+number)) {
    alert (number = prompt("Введено некоректне значення, введіть число >0"))
}
function getMetric(metric, km, m ,cm){
    if (metric == "m") {
    return m(km);
    }
    else if (metric == "cm") {
    return cm(km);
    };
    return "Потрібно ввести m або cm";
}

alert(getMetric(metric, number, KmToM, KmToCm));