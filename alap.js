let sz = ""
const sor = 15
const oszlop = 15
//---------------------------------------------gombok kirajzolása

for (let i = 0; i < sor; i++) {
    
    for (let j = 0; j < oszlop; j++) {
        sz += `<button id="${i}_${j}" onclick = "kattint(this.id)" style = "background-color: #E5E5E5;  height: 100px;width: 100px;"></button>`
        
    }
    sz += "<br>"
}

document.getElementById("tabla").innerHTML = sz
//------------------------------------------------kétD tömb
let tomb = []

for (let i = 0; i < sor; i++) {

    egySor = []

    for (let j = 0; j < oszlop; j++) {
        egySor.push(0)
    }

    tomb.push(egySor)
    
}

console.log(tomb)


function kattint(id) {
    //alert(id)

    let kecske = id.split("_")
    let s = parseInt(kecske[0])
    let o = parseInt(kecske[1])
  
        szinez(s, o)
        szinez(s - 1, o)
        szinez(s + 1, o)
        szinez(s, o + 1)
        szinez(s, o - 1)
    
}

function szinez(s, o) {

    if (o >= 0 && s >= 0 && o < oszlop && s < sor) {

        if (tomb[s][o] == 0) {
            document.getElementById(s + "_" + o).style.backgroundColor = "red"
            tomb[s][o] = 1
        } else {
            document.getElementById(s + "_" + o).style.backgroundColor = "#E5E5E5"
            tomb[s][o] = 0
        }
    }
}