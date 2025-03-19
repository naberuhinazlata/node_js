fetch('https://rickandmortyapi.com/api/character/?page=19')
    .then((result) => {
    return result.json();
})
.then((result) => {
    result.results.forEach((character) => {
        console.log(`${character.name}, status: ${character.status}, species: ${character.species}`);
     })
})



fetch('https://rickandmortyapi.com/api/character/2')
    .then((result) => {
    return result.json();
})
.then((result) => {
    result.results.forEach((character) => {
        console.log(`${character.name}, status: ${character.status}, species: ${character.species}`);
     })
})


fetch('https://rickandmortyapi.com/api/character/1,183')
    .then((result) => {
    return result.json();
})
.then((result) => {
    console.log(result);
    result.results.forEach((character) => {
        console.log(`${character.name}, status: ${character.status}, species: ${character.species}`);
     })
})




fetch('https://rickandmortyapi.com/api/character/?name=rick&status=alive')
    .then((result) => {
    return result.json();
})
    .then((result) => console.log(result));   



fetch('https://rickandmortyapi.com/api/location')
    .then((result) => {
    return result.json();
})

