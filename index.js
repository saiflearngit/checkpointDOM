function add() {
    document.getElementById("number_of_items1").innerHTML = parseInt(document.getElementById("number_of_items1").innerHTML) + 1

}

function substract() {
    document.getElementById("number_of_items1").innerHTML = parseInt(document.getElementById("number_of_items1").innerHTML) - 1

}

function del() {
    document.getElementById("item1").innerHTML = ""

}

function like() {

}

function add2() {
    document.getElementById("number_of_items2").innerHTML = parseInt(document.getElementById("number_of_items2").innerHTML) + 1

}

function substract2() {
    document.getElementById("number_of_items2").innerHTML = parseInt(document.getElementById("number_of_items2").innerHTML) - 1

}

function del2() {
    document.getElementById("item2").innerHTML = ""

}

function like() {

}

function total() {
    document.getElementById("total").innerHTML = document.getElementById("number_of_items2").innerHTML*document.getElementById("price2").innerHTML + document.getElementById("number_of_items1").innerHTML*document.getElementById("price1").innerHTML

}



