//Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// Stampate il prezzo finale del biglietto nella console del browser in forma “umana” ovvero con massimo due cifre decimali, per indicare centesimi sul prezzo (per questo sarà necessario cercare in documentazione come fare)

//Chiedere  numero di km ed eta passeggero
const eta= prompt('Quanti anni hai?') //string|null
console.log(eta)
const kilometri= prompt('Quanti km percorrerai?') //string|null
console.log(kilometri)
// prezzo del biglietto base fissa 0,21euro moltoplicato per i km
const basePrezzo = 0.21 // number
console.log(basePrezzo)

let totalePrezzo= basePrezzo*kilometri //numberi
console.log('totale del prezzo senza sconto:' + ' ' + totalePrezzo + 'euro')
//SE cliente  <18 applicare 20%sconto
let prezzoScontato
if(eta<18){
 prezzoScontato= totalePrezzo - (totalePrezzo*20)/100 //number
 console.log('prezzo finito scontato per minorenni' + ' ' + prezzoScontato)
}

//SE cliente <65 applicare 40% sconto
else if (eta>65){
    prezzoScontato= totalePrezzo - (totalePrezzo*40)/100 //number
    console.log('prezzo finito scontato per pensionati' + ' ' + prezzoScontato)
}
else{
    console.log(totalePrezzo)
}
// stampare prezzo finito con calcolo in centesimi 00.00 
