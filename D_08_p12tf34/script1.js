for (let i = 1; i <= 10; i++){
    if (i % 3 == 0){
        
    let element = document.getElementById("lista");
    element.innerHTML += (` <ul> <li style = "color: purple"> Element ${i} </li> </ul>`);
    } else {
        let element = document.getElementById("lista");
        element.innerHTML += (`<li> Element ${i} </li>`);}
}