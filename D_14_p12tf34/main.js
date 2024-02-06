import Knjiga from "./knjige.js";

let knjiga1 = new Knjiga (`Ovo sam ja`, `Milos`, 1999, 601, 8001)
knjiga1.stampaj()
let knjiga2 = new Knjiga (`Ovo je Flleka`, `Ana`, 1999, 1200, 300)
console.log(knjiga2.obimna());
let knjiga3 = new Knjiga( `Ovo je Kika`, `Kristina`, 2003, 300, 10000)
console.log(knjiga3.skupa());
let knjiga4 = new Knjiga (`BUKI`,`Milan Aleksandrovic`, 1999, 3200, 120)
console.log(knjiga4.dugackoIme());

let nizKnjige = [knjiga1, knjiga2, knjiga3, knjiga4];

nizKnjige.forEach(knjiga =>{
    if(knjiga.dugackoIme()){
        console.log(knjiga.autor);
    }
})


nizKnjige.forEach(knjiga =>{
    if(knjiga.skupa() && knjiga.obimna()){
        console.log(knjiga);
    }
})

let ukupnaCena = niz => {
    let ukupno = 0;
    niz.forEach(knjiga =>{
        ukupno += knjiga.cena;
    })
    return ukupno
}
console.log(ukupnaCena(nizKnjige));

function prosecnaCena (niz) {
    return ukupnaCena(niz)/niz.length
}

console.log(prosecnaCena(nizKnjige));

let prosecnaCenaStranice = niz =>{
    let strane = 0;
    let cene = 0;
    niz.forEach(knjiga =>{
        cene += knjiga.cena;
        strane += knjiga.brojStrana
    })
    return cene / strane;
}

console.log(prosecnaCenaStranice(nizKnjige));

let prosecnaCenaStraneKnjige = (niz, naslov) => {
    let ispis = `Trazena knjiga ne postoji`
    niz.forEach(knjiga =>{
        if(knjiga.naslov == naslov){
            ispis = knjiga.cena / knjiga.brojStrana
        } 
    });
    return ispis
}

console.log(prosecnaCenaStraneKnjige(nizKnjige, `Ovo sam ja`))