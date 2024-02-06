// Prvi zadatak

let v = 30;
let n = 9;
let dozvoljeno = v / 3;
let višak = Math.ceil(n - dozvoljeno);


if (dozvoljeno >= n){
    document.write(`<p style="color: green; font-size: 90px; font-weight: bold;"> DA </p>`);
} else {
    document.write(`<p style="color: red; font-size: 90px; font-weight: bold;"> NE </p>`);
    document.write(`<span style="color: red; font-size: 35px"> <b>${višak}</b> osoba mora da napusti lokal! </span>`)
}

// Drugi zadatak

let ukupan_broj_stanovnika = 1000;
let ukupno_testiranih_u_jednom_danu = 900;
let pozitvnih_u_danu = 269;
let pozitvnih_ukupno = 0;  
pozitvnih_ukupno = pozitvnih_ukupno + pozitvnih_u_danu; //Ovde sabiramo sve pozitivne iz svakog dana
let trideset_posto = ukupno_testiranih_u_jednom_danu * 0.3; //Ovde dobijamo 30% TESTIRANIH PO DANU
let deset_posto = ukupan_broj_stanovnika * 0.1; //Ovde dobijamo 10% UKUPNO TESTIRANIH 

if ( pozitvnih_u_danu >= trideset_posto || pozitvnih_ukupno >= deset_posto){
    document.write(`<p style="color: red; font-size: 50px"> <b>VANREDNO STANJE</b> </p>`)
}
