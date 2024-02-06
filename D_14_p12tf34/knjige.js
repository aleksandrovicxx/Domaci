class Knjiga {
    constructor (n, a, gi, bs, c){
        this.naslov = n;
        this.autor = a;
        this.godinaIzdanja = gi;
        this.brojStrana = bs;
        this.cena = c
    }

    set naslov(n) {
        this._naslov = n
    }
    set autor(a) {
        this._autor = a
    }
    set godinaIzdanja(gi) {
        this._godinaIzdanja = gi
    }
    set brojStrana(bs) {
        this._brojStrana = bs
    }
    set cena(c) {
        this._cena = c
    }

    get naslov(){
        return this._naslov
    }
    get autor(){
        return this._autor
    }
    get godinaIzdanja(){
        return this._godinaIzdanja
    }
    get brojStrana(){
        return this._brojStrana
    }
    get cena(){
        return this._cena
    }

    stampaj(){
        let ispis = document.createElement(`div`);
        ispis.innerHTML = `Naslov knjige: "${this.naslov}" <br> Autor knjige: ${this.autor}, <br>Godina izdanja knjige: ${this.godinaIzdanja}.god, <br> Broj strana: ${this.brojStrana}, <br> <b>Cena: ${this.cena}<b> rsd.`
        document.body.appendChild(ispis)
    }
    
    obimna() {
        if(this.brojStrana > 600){
            return true
        } else {
            return false
        }
    }

    skupa(){
        if(this.cena > 8000){
            return true
        }
        return false
    }

    dugackoIme() {
        if(this.autor.length > 18){
            return true
        }
        return false
    }
}

export default Knjiga