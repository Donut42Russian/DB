function buttonOnClick1(){
    student.change_year()

    document.getElementById('info').innerHTML = student.output_info()
}

function buttonOnClick2(){
    let year = document.getElementById('info').innerHTML
    student.changeBirth(year)
}

student = {
    "Фамилия": "Панчишин",
    "Имя": "Даниил",
    "Отчество": "Игоревич",
    "День рождения": "29.07.2002",
    "Класс": 1,
    "Срок обучения": 11,
    "Любимые предметы": ["Базы данных", "Информатика", "Архитектура вычислительных систем"],
    "Место прописки": {
        "Страна":"Россия" ,
        "Город": "Кемерово",
        "Номер дома": "61",
        "Номер квартиры": "99"
    },
    "Место проживания": {
        "Страна":"Россия" ,
        "Город": "Кемерово",
        "Номер дома": "51",
        "Номер квартиры": "8"
    }
 }

 student.change_year = function(){
     if(this['Класс'] < this["Срок обучения"]){
         this['Класс'] += 1
     }
     else {
         alert('Максимальный класс достигнут')
     }
 }

student.output_info = function(){
    return 'Ф.И.О: ' + this["Фамилия"] + ' ' + this["Имя"] + ' ' + this["Отчество"] + '<br>' + 
	'День рождения: ' + this["День рождения"] + '<br>' + 
	"Класс: " + this["Класс"] + '<br>' + 
	"Любимые предметы: " + this["Любимые предметы"] + '<br><br>' +
     "Место прописки:" + '<br>' + 
	this["Место прописки"]["Страна"] + '<br>' + 
	this["Место прописки"]["Город"] + '<br>' + 
	this["Место прописки"]["Номер дома"] + '<br>' + 
	this["Место прописки"]["Номер квартиры"] + '<br><br>' + 
     "Место проживания:" + '<br>' + 
	this["Место проживания"]["Страна"] + '<br>' + 
	this["Место проживания"]["Город"] + '<br>' + 
	this["Место проживания"]["Номер дома"] + '<br>' + 
	this["Место проживания"]["Номер квартиры"] + '<br>' 
}

student.changeBirth = function(birth){
    let now_date = new Date().getFullYear()
    if(birth >= (now_date - 200) && birth <= now_date){
        this["День рождения"] = birth
    }
    else{
        console.log(`Ошибка ввода!`)
    }
}

document.getElementById('info').innerHTML = student.output_info()