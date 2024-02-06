//PRVI ZADATAK.
//---prvi način---

let n = 500;
console.log("Putnik je poneo " + n + ".");
let novacZaBusKartu = n / 5;
console.log(novacZaBusKartu + " je dao za autobusku kartu.");
let novacZaSmeštaj = n / 3;
console.log(novacZaSmeštaj.toFixed(2) + " je dao za smeštaj.");
let preostaliNovac = n - novacZaBusKartu - novacZaSmeštaj;
console.log("Novac koji mu je ostao je : " + preostaliNovac.toFixed(2) + ".");

//---drugi način---

let n1 = 1000;
let novacZaBusKartu2 = n1 / 5;
let novacZaSmeštaj2 = n1 / 3;
let potrošeniNovac = novacZaBusKartu2 + novacZaSmeštaj2;
let preostaliNovac2 = n1 - potrošeniNovac;
console.log("Putnik je na put poneo " + n1 + ", a za autobusku kartu i smeštaj potrošio je " + potrošeniNovac.toFixed(2) + ", tako da mu preostaje: " + preostaliNovac.toFixed(2));



//DRUGI ZADATAK

let n2 = 5000;
let a = 500;
let brojPričitanihPoglavljaDrugogDana = a + 2;
let brojPričitanihPoglavljaUkupno = a + brojPričitanihPoglavljaDrugogDana;
let preostaliBrojPoglavlja = n2 - brojPričitanihPoglavljaUkupno;
console.log("Preostali broj poglavlja je: " + preostaliBrojPoglavlja);

//TREĆI ZADATAK

let cenaDžempera = 230; 
let p = 1000;  //Pretpostavljamo da Pera nije dao manje novca od cene džempera
let m = 1500; //Pretpostavljamo da ni Mika nije dao manje novca od cene džempera
let kPera = p - cenaDžempera;
let kMika = m - cenaDžempera;

console.log("Pera treba da dobije kusur: " + kPera)
console.log("Mika treba da dobije kusur: " + kMika)