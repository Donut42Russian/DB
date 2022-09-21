var students = [
    ["Панчишин", "Даниил", 2, "02.03.02"],
    ["Примкулов", "Дмитрий", 2, "02.03.02"],
    ["Пасютин", "Александр", 3, "02.03.03"],
    ["Ровков", "Иван", 4, "02.03.03"],
    ["Абрамов", "Илья", 1, "02.03.05"],
    ["Герасименок", "Илья", 1, "02.03.05"]
]

function search_students(){
    var code = document.getElementById('code').value
    for(let i of students) {
        if(i[3] == code ) {
            document.getElementById('result').innerHTML += `<ul><li>${i[0]} ${i[1]} ${i[2]} ${i[3]}</li></ul>`
        }
        else{
            console.log(`${i[0]} ${i[1]} ${i[2]} ${i[3]}`)
        }
    }
}