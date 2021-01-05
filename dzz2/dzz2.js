var students = [
    { name: "Dima", isAdmin: true, email: "dima@gmail.com", mark: 4 },
    { name: "Helen", isAdmin: false, email: "helen@gmail.com", mark: 4.2 },
    { name: "Denis", isAdmin: false, email: "denis@gmail.com", mark: 3.7 },
    { name: "Vasya", isAdmin: true, email: "vasya@gmail.com", mark: 5 },
    { name: "Masha", isAdmin: false, email: "masha@gmail.com", mark: 3.9 },
    { name: "Petya", isAdmin: true, email: "perya@gmail.com", mark: 4.1 }
];

var result = "";
for(var i = 0; i < students.length; i++) {
    var user = students[i];
    if(user.mark >= 4){
        result += user.name;
        result += ", ";
        var lastComa = result.lastIndexOf(', ');
        var newResult = result.substr(0, lastComa);
    }
}
console.log(newResult);

var result = "";
for(var i = 0; i < students.length; i++) {
    var user = students[i];
    if(user.isAdmin && user.mark >= 4){
        result += user.name;
        result += ", ";
        var lastComa = result.lastIndexOf(', ');
        var newResult = result.substr(0, lastComa);
    }
}
console.log(newResult);

var arrResult;
arrResult = (4 + 4.2 + 3.7 + 5 + 3.9 + 4.1)/6;
console.log("Среднее арифметическое: " + arrResult.toFixed(2));

var userName = prompt("Введите имя");
for(var i = 0; i < students.length; i++) {
    if(userName == students[i].name){
        alert(students[i].email);
    } else {
        alert("Введите имя из массива данных");
    }
}
console.log('Compleated');