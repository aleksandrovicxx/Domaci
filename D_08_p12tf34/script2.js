for(i = 1; i <= 64; i++){
    if (i <= 8 || i <= 24 && i >= 17 || i <= 40 && i >= 33 || i >= 49 && i <= 56){
        if (i % 2 == 0){
            document.write(`
            <span style="background-color: black; text-align: center; float: left; color: white; width: 35px; height: 35px;"> ${i} </span> `)
            if (i % 8 == 0){
                document.write(`<br> <br>`)
            }
        } else {
        document.write(`
        <span style="background-color: white; text-align: center; float: left; color: black; width: 35px; height: 35px;"> ${i} </span>
        `)
        }
    } else if ( i <= 16 && i >= 8 || i <= 32 && i >= 25 || i <= 48 && i >= 41 || i >= 57 && i <= 64){
        if (i % 2 == 0){
            document.write(`
            <span style="background-color: white; text-align: center; float: left; color: black; width: 35px; height: 35px;"> ${i} </span> `)
            if (i % 8 == 0){
                document.write(`<br> <br>`)
            }
        } else {
        document.write(`
        <span style="background-color: black; text-align: center; float: left; color: white; width: 35px; height: 35px;"> ${i} </span>
        `)
        }
    } 
}