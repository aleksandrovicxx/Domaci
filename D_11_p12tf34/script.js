// Zadatak 1:
let temperature = [2, 3, 4, 5, 7, 6, 4, 3, 10];

let prosek = niz => {
    let suma = 0;
    let brojač = 0;
    niz.forEach(el => {
        suma += el;
        brojač++
    });    
    let prosečnaTemperatura = suma / brojač;
    return prosečnaTemperatura;
}

let zad1 = niz => {   
    let prosečna = prosek(niz)

    let najbližiElement = niz[0];
    niz.forEach( el => {
        if(Math.abs(prosečna - el) < Math.abs(prosečna - najbližiElement)){
            najbližiElement = el
        }
    });
    return najbližiElement
}
console.log(zad1(temperature));

// Zadatak 2:
temperature = [2, 3, 4, 5, 7, 6, 4, 3, 10];

let zad2 = niz => {
    let max = niz[0];

    niz.forEach (el => {
        if (el > max){
            max = el;
        }
    });


    let min = niz[0];
    niz.forEach (el => {
        if (el < min){
            min = el;
        }
    });

    let prosečnaVrednost = prosek(niz);
    let najbližiEl = zad1(niz);

    niz.forEach (el => {
        if ( el == max){
            document.write(`<p style = "color: red; font-size: 35px"> ${el} </p>`)
        } else if (el == min){
            document.write(`<p style = "color: blue; font-size: 35px"> ${el} </p>`)
        } else if (el == najbližiEl){
            document.write(`<p style = "color: yellow; font-size: 35px"> ${el} </p>`)
        } else {
            document.write(`<p style = "font-size: 35px"> ${el} </p>`)  // Povećao sam font, zato što se žuta boja ne vidi sa belom pozadinom
        }
    })
}

console.log(zad2(temperature));