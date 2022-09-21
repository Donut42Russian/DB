var items = ["Машинное обучение", "Базы данных", "Математический анализ", "Линейная алгебра"]

console.log(document.getElementById("subjects"))
for(let i=0; i<4; i++){
    document.getElementById("subjects").innerHTML += (i+1).toString() +'. ' + items[i] + "<br>";
}