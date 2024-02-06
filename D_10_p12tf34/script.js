// 1. ZADATAK

let stavkeZaKupovinu = ["Mleko", "Kafa", "Šećer", "Deterdžent", "So", "Krompir", "Voće"];

let ispisivanjeSpiskaZaKupovinu = spisak => {
    for (let i = 0; i < spisak.length; i++){
        let element = document.getElementById("lista");
        element.innerHTML += `<li> ${(spisak[i])} </li>`
    }
}
ispisivanjeSpiskaZaKupovinu (stavkeZaKupovinu);

// 2. ZADATAK

let imenaKošarkaškihTimova = ["Los Angeles Lakers", "Boston Celtics", "Chicago Bulls", "Golden State Warriors", "Real Madrid"]

let ispisvanjeUTabeli = košarkaškiklubovi => {
    for (let i = 0; i < košarkaškiklubovi.length; i++){
        let zatabelu = document.getElementById("tabela");
        zatabelu.innerHTML += `<tr> <td> ${(košarkaškiklubovi[i])} </td> <td></td> <td></td> <td></td> </tr>` 
    }
}
console.log(ispisvanjeUTabeli(imenaKošarkaškihTimova));

//3. ZADATAK 
let putanje = ["https://www.simplilearn.com/ice9/free_resources_article_thumb/Front_End_Developer_Job_Description.jpg", "https://vtiacademy.edu.vn/upload/images/frontend-la-gi-top-7-kien-thuc-can-biet-khi-chinh-phuc-front-end-1.jpeg", "https://sonatafy.com/wp-content/uploads/2021/11/everything-a-frontend-developer.jpg"];

let prikazivanjeSlike = slike => {
    for (let i = 0; i < slike.length; i++){
        document.write(`<img src="${slike[i]}" alt="">`);
        document.write(`Putanja do slike je: ${slike[i]} <br>`)
    }
}
prikazivanjeSlike(putanje)