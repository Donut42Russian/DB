var table = document.getElementById("multiplication_table")

table.innerHTML = ""
for(let i=0; i<=10; i++){
    table.innerHTML += i + " * 5 = " + (i * 5).toString() + "<br> ";
}

