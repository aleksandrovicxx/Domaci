knjiga1 = {
    naziv: "Don Kihot",
    autor: "Miguel de Cervantes",
    slika: "Slike/Don Kihot.png",
    pročitana: true
};
knjiga2 = {
    naziv: "Gospodar prstenova",
    autor: "J.R.R. Tolkien",
    slika: "Slike/Gospodar prstenova.png",
    pročitana: true
}
knjiga3 = {
    naziv: "Romeo i Julija",
    autor: "William Shakespeare",
    slika: "Slike/Romeo i Julija.png",
    pročitana: false
}
knjiga4 = {
    naziv: "Cvrkut ptica",                                           
    autor: "Harper Lee",
    slika: "Slike/Cvrkut ptica.png",
    pročitana: true
}
knjiga5 = {
    naziv: "Cvrkut ptica",
    autor: "Harper Lee",
    slika: "Slike/Cvrkut ptica.png",
    pročitana: false                                                 
}
knjiga6 = {
    naziv: "Romeo i Julija",
    autor: "William Shakespeare",
    slika: "Slike/Romeo i Julija.png",
    pročitana: true
}
knjiga7 = {
    naziv: "Don Kihot",
    autor: "Miguel de Cervantes",
    slika: "Slike/Cvrkut ptica.png",
    pročitana: false
};
let knjige = [knjiga1, knjiga2, knjiga3, knjiga4, knjiga5, knjiga6,knjiga7];

let ispis = "";

knjige.forEach((knjiga, indeks) =>{
    if (indeks % 2 === 0){
        if (knjiga.pročitana == true){
            ispis += `<tr style="color: blue; background-color: aqua;"> <td> <img src="${knjiga.slika}" alt="" width="100px" height="100px"> </td> <td> Naziv knjige: ${knjiga.naziv} <br> Autor knjige: ${knjiga.autor} </td> </tr>`;
        } else {
            ispis += `<tr style="color: gray; background-color: aqua;"> <td> <img src="${knjiga.slika}" alt="" width="100px" height="100px"> </td> <td> Naziv knjige: ${knjiga.naziv} <br> Autor knjige: ${knjiga.autor} </td> </tr>`;
        }    
    } else {
        if (knjiga.pročitana == true){
            ispis += `<tr style="color: blue; background-color: steelblue;"> <td> <img src="${knjiga.slika}" alt="" width="100px" height="100px"> </td> <td> Naziv knjige: ${knjiga.naziv} <br> Autor knjige: ${knjiga.autor} </td> </tr>`;
        } else {
            ispis += `<tr style="color: gray; background-color: steelblue;"> <td> <img src="${knjiga.slika}" alt="" width="100px" height="100px"> </td> <td> Naziv knjige: ${knjiga.naziv} <br> Autor knjige: ${knjiga.autor} </td> </tr>`;
        }
    }
})
document.write(`<table>  ${ispis}  </table>`)    
