function User(firstName, lastName, regDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.regDate = regDate;

    this.getUserName = function() {
        return this.firstName + ' ' + this.lastName + ' ' + this.regDate;
    };
}

function UserList() {
    this.users = [];
    this.add = function(user) {
       return this.users.push(user);
    };
    this.getAllUsers = function() {
        return this.users;
    };
}

var newUserList = new UserList();
console.log(newUserList.getAllUsers());

while (true) {

    var userData = prompt("Введите имя и фамилию через пробел");
    var newStr = userData.trim().split(" ");
    var regDate = getRegDate();
    if(newStr.length === 1) {
        alert("Ошибка ввода");
        break;
    }

    for (var i = 0; i < newStr.length - 1; i++) {
        var firstName = newStr[i];
        var lastName = newStr[i + 1];
    }

    function getRegDate() {
        var d = new Date();
        function getCurrentMonth() {
            return d.getMonth() + 1;
        }
        return d.getDate() + "." + getCurrentMonth() + "." + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    }

    var user = new User(firstName, lastName, regDate);

    newUserList.add(user);

    if (!userData) {
        break;
    }
}