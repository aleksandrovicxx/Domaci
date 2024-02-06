/*
Kreirati fajl sportisti.json, koji sadrži niz objekata, pri čemu svaki objekat sadrži sledeće atribute: imePrezime (string), visina (broj), timovi (niz stringova).

Uspostaviti konekciju ka fajlu sportisti.json.

Ispisati prosečnu visinu svih sportista.

Ispisati ime i prezime sportiste sa najmanje transfera (bilo kog ako ima više takvih sportista).

Ispisati imena i prezimena svih sportista koji su igrali za „Lakers“-e.

*/
const sportisti = new XMLHttpRequest();
sportisti.addEventListener('readystatechange', () => {
    if (sportisti.readyState == 4 && sportisti.status == 200) {
        let sportistiSpisak = JSON.parse(sportisti.responseText)
        let visine = 0;
        let brojac = 0;
        sportistiSpisak.forEach(sportista => {
            visine += sportista.visina;
            brojac++
        });
        console.log(`Prosecna visina svih sportista je: ${visine/brojac}`);
    };
    
})


sportisti.addEventListener('readystatechange', () => {
    if (sportisti.readyState == 4 && sportisti.status == 200) {
        let sportistiSpisak = JSON.parse(sportisti.responseText)
        let najmanjeTransfera = sportistiSpisak[0];
        let brojTransferaMin = najmanjeTransfera.timovi.length;
        sportistiSpisak.forEach(sportista => {
            if(sportista.timovi.length < brojTransferaMin) {
                brojTransferaMin = sportista.timovi.length;
                najmanjeTransfera = sportista;
            };
        });
        console.log(`Sportista sa najmanje transfera je ${najmanjeTransfera.imePrezime}`);
    };
})

// prvi nacin
sportisti.addEventListener('readystatechange', () => {
    if (sportisti.readyState == 4 && sportisti.status == 200) {
        let sportistiSpisak = JSON.parse(sportisti.responseText)
        let igraliULakers = []
        sportistiSpisak.forEach(sportista => {
            sportista.timovi.forEach(tim =>{
                if(tim.includes('Lakers')){
                    igraliULakers.push(sportista)
                }
            })
        });
        igraliULakers.forEach(igrac =>{
            console.log(igrac.imePrezime);
        });
    }
});

// drugi nacin

sportisti.addEventListener('readystatechange', () => {
    if (sportisti.readyState == 4 && sportisti.status == 200) {
        let sportistiSpisak = JSON.parse(sportisti.responseText)
        sportistiSpisak.forEach(sportista => {
            sportista.timovi.forEach(tim =>{
                if(tim.includes('Lakers')){
                    console.log(sportista.imePrezime);
                }
            })
        });
    }
})
sportisti.open("GET", "sportisti.json")
sportisti.send()