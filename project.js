let navbarName = document.getElementById("navbarName");
let save = document.getElementById("save")
let username = document.getElementById("name")
let email = document.getElementById("email")
let clear = document.getElementById("clear")
let madhu = "username"
navbarName.textContent = username;
save.onclick = function() {
    let ll = username.value;
    localStorage.setItem(madhu, ll);

}
clear.onclick = function() {
    username.value = ""
    localStorage.removeItem(madhu)
}
let uservalue = localStorage.getItem(madhu)
navbarName.textContent = uservalue