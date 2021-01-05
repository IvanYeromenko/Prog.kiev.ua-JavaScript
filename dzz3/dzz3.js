var students = [
    { name: "Dima", isAdmin: true, email: "dima@gmail.com", mark: 4 },
    { name: "Helen", isAdmin: false, email: "helen@gmail.com", mark: 4.2 },
    { name: "Denis", isAdmin: false, email: "denis@gmail.com", mark: 3.7 },
    { name: "Vasya", isAdmin: true, email: "vasya@gmail.com", mark: 5 },
    { name: "Masha", isAdmin: false, email: "masha@gmail.com", mark: 3.9 },
    { name: "Petya", isAdmin: true, email: "perya@gmail.com", mark: 4.1 }
];

function getExcellentStudents(){
    var excellentStudents = [];
    for(var i in students) { //i автоматически становится 0 и проходится по массиву
        var user = students[i];
        if(user.mark >= 4){
            excellentStudents.push(user.name);
        }
    }
    return excellentStudents.join(', ');
}

function getAdminCount(){
    var filteredAdminStudents = [];
    var markToCheck = 4;
    for(var user of students) { //еще один вариант цикла, user сразу присваивается students(2015 год)
        //var user = students[i];
        if(user.isAdmin && user.mark >= markToCheck){
            filteredAdminStudents.push(user.name);
        }
    }
    return filteredAdminStudents.join(', ');
}

function getAverage(){
    var isSum = 0;
    for(var student of students) {
        isSum += student.mark;
    }
    return (isSum/students.length).toFixed(2);
}

function isStudent(){
    var isFound = false;
    var userName = prompt("Введите имя");
    for(var i = 0; i < students.length; i++) {
        if(userName == students[i].name){
            isFound = true;
            alert(students[i].email);
        }
        return isFound;
    }
}

var filteredArr = students.filter(function(student){
    return student.isAdmin;
})

var getIsAdmin = [];
function getFilteredArr(){
    for(var i in filteredArr){
        getIsAdmin.push(filteredArr[i].name);
    }
    return getIsAdmin;
}