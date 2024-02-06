let movie1 = {
    Name: "Inception",
    Director: { 
        FirstName: "Christopher",
        LastName: "Nolan" },
    Release_year: 2010,
    Genres: ["Sci-Fi", "Action", "Thriller"],
    Rating: 8.8
}
let movie2 = {
    Name: "The Shawshank Redemption",
    Director: { 
        FirstName: "Frank", 
        LastName: "Darabont" },
    Release_year: 1994,
    Genres: ["Drama", "Crime" /*Ovo brisem*/],
    Rating: 9.3
}
let movie3 = {
    Name: "The Dark Knight",
    Director: { 
        FirstName: "Christopher", 
        LastName: "Nolan" },
    Release_year: 2008,
    Genres: ["Action", "Crime", "Drama"],
    Rating: 9.0
}
let movie4 = {
    Name: "Pulp Fiction",
    Director: { 
        FirstName: "Quentin", 
        LastName: "Tarantino" },
    Release_year: 1994,
    Genres: ["Crime", "Drama"],
    Rating: 8.9
}
let movie5 = {
    Name: "The Godfather",
    Director: { 
        FirstName: "Francis", 
        LastName: "Coppola" },
    Release_year: 1972,
    // Dodavanje zanra kasnije
    Rating: 9.2
}

db.collection('movies').doc('movie1')
.set(movie1)
.then(() =>{
    console.log(`Dodato`);
})
.catch(e=>{
    console.log(`Greska ${e}`);
})
db.collection('movies').doc('movie2')
.set(movie2)
.then(() =>{
    console.log(`Dodato`);
})
.catch(e=>{
    console.log(`Greska ${e}`);
})
db.collection('movies').doc('movie3')
.set(movie3)
.then(() =>{
    console.log(`Dodato`);
})
.catch(e=>{
    console.log(`Greska ${e}`);
})
db.collection('movies').doc('movie4')
.set(movie4)
.then(() =>{
    console.log(`Dodato`);
})
.catch(e=>{
    console.log(`Greska ${e}`);
})
db.collection('movies').doc('movie5')
.set(movie5)
.then(() =>{
    console.log(`Dodato`);
})
.catch(e=>{
    console.log(`Greska ${e}`);
})

db.collection('movies').doc('movie3')
.update({
    Rating: 10.0
})
.then(()=>{
    console.log(`Izmenjen podatak`);
})
.catch(e=>{
    console.log(`Greska ${e}`);
})

db.collection('movies').doc('movie5')
.update({
    Genres: ["Crime", "Drama"],
})
.then(()=>{
    console.log(`Dodat zanr`);
})
.catch(e=>{
    console.log(`Greska ${e}`);
})

db.collection('movies').doc('movie2')
.update({
    Genres: firebase.firestore.FieldValue.arrayRemove("Crime")
})
.then(()=>{
    console.log(`Obrisan podatak`)
})
.catch(e=>{
    console.log(`Greska ${e}`);
})