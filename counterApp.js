// document.getElementById("count-el").innerText = 5; // vai all'id=count-el e sostituisci il testo con "5"

//store data with variable con let nomeVariabile = valore

// let count = 5
// count += 1 // the same as  count = count + 1
// console.log(count);



// initialize count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let count = 0
// grab the count-el and store in a variable called countEl
let countEl = document.getElementById("count-el") // pass in arguments ""
 //console.log(countEl);   // si tratta di un object con moltissime proprietà
//grab the save-el and store in a variable called saveEl

let saveEl = document.getElementById("save-el")

function increment() {
    count = count + 1 // count += 1
    countEl.innerText = count
   // console.log(count)
}  //in questo caso no richiamo la funzione perchè l'ho richiamta nel <button>

//Now create a function save() which logs out the count when it's called
// then create a variable that contains both the count and the dashed separator , i.e. "12 - "
// NB : make sure to not delete the existing content of the paragraph


function save() {
    let countStr = count + " - " // per eliminare problemi dello spazio uso textContent al posto si innerText
    saveEl.textContent += countStr // sostituisci nel paragrafo quello che ho trovato prima
    countEl.innerText = 0
    count = 0
    // console.log(count) per DEBUGGING 
}

// function clr() {
//     countEl.innerText = "0"
// }



