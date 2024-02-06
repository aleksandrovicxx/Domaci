function prviZadatak (broj, string){
    let ispis = document.getElementById("ispis");
    ispis.innerHTML = `<p style="font-size: ${broj}px;"> ${string} </p>`;
}
prviZadatak(50, "Lorem ipsum");


function drugiZadatak(n, boja1, boja2, slika){
    for ( i = 1; i <= n; i++){
        if (i % 2 == 0){
        document.write(`<img src="${slika}" alt="" style="border: 12px solid ${boja1};">`)
        } else {
            document.write(`<img src="${slika}" alt="" style="border: 12px solid ${boja2};">`)
        }
    }
}
drugiZadatak ( 8, "green", "red", "slika.jpg")

