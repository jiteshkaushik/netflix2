// api key from tmdb

const api = "api_key=72e48feac8ba50bb6695b96c39d23033";

// base url of th site 


const base_url = "https://api.themoviedb.org/3";

const banner_url = "https://image.tmdb.org/t/p/original"
const img_url = "https://image.tmdb.org/t/p/w300";// netfelix ke site ma w185 used hota h.
// request for movies data

const request = {

    fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
    fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_network=213`,
    fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
    fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
    fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
};
//   used to truncate the string

function truncate(str, n){
    return str?.length > n ? str.substr(0, n - 1)+ "..." : str;
}
// banner
fetch(request.fetchNetflixOrignals)  // yaha request ka s hata kr cheak kara
.then((res) =>res.json())

.then((data) =>{
    //every refresh the movies will be change
    
    const setMovie = 
    data.results[Math.floor(Math.random() * data.results.length - 1)];

    var banner = document.getElementById("banner");
    var banner_title = document.getElementById("banner__title");
    var banner__desc = document.getElementById("banner__description");

    banner.style.backgroundImage=
    "url("+ banner_url + setMovie.backdrop_path +")";
    banner__desc.innerText = truncate(setMovie.overview,150);
    banner_title.innerText =setMovie.name;
});

//movies rows

fetch(request.fetchNetflixOrignals)  // s change req ka
.then((res) =>res.json())

.then((data)=>{
    const headrow = document.getElementById("headrow");
    const row =document.createElement("div");
    
    row.className = "row"
    row.classList.add("netflixrow");
    headrow.appendChild(row);
    
    const title = document.createElement("h2");

    title.className = "row__title";
    title.innerText = "NETFLIX ORIGINALS"


    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);
    
    data.results.forEach((movie ) =>{
        const poster = document.createElement("img");
    poster.className = "row__posterLarge";

    var s = movie.name.replace(/\s+/g, "");

    poster.id= s;
    poster.src = img_url + movie.poster_path;
    row_posters.appendChild(poster);

});
 });

//  top rating

fetch(request.fetchTrending)
.then((res) => res.json())
.then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText=  "Top Rated";
    row.appendChild(title);
    const row__posters = document.createElement("div");
    row__posters.className = "row__posters";
    row.appendChild(row__posters);


    data.results.forEach((movie)=>{
        const poster = document.createElement("img");
        poster.src = img_url + movie.poster_path;
        row__posters.appendChild(poster);


    });
});

// action

fetch(request.fetchActionMovies)
.then((res)=> res.json())
.then((data) =>{
    const headrow =document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);


    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Action Movies";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);


    data.results.forEach((movie)=>{
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row__poster";
        var s2 = movie.id;
        poster.id = s2;
        poster.src = img_url + movie.backdrop_path;
        row_posters.appendChild(poster);

    })
})

// comedy
fetch(request.fetchComedyMovies)
.then((res) => res.json())

.then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Comedy Movies";
    row.appendChild(title);
    
    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);
    data.results.forEach((movie)=>{
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row__poster";
        var s2 = movie.id;
        poster.id =s2;
        poster.src = img_url+ movie.backdrop_path;
        row_posters.appendChild(poster);

    })
})
// Horror
fetch(request.fetchHorrorMovies)
.then((res) => res.json())

.then((data) =>{
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Horror Movies";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) =>{
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row__poster";
        var s2 =movie.id;
        poster.id = s2;
        poster.src = img_url + movie.backdrop_path;
        row_posters.appendChild(poster);

    });
});

// romance
fetch(request.fetchRomanceMovies)
.then((res) => res.json())
.then((data) =>{
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row"
    headrow.appendChild(row);

    const title = document.createElement("h2");
    title.className ="row__title";
    title.innerText = "Romance Movies";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row__poster";
        var s2 = movie.id;
        poster.id = s2;
        poster.src = img_url + movie.backdrop_path;
        row_posters.appendChild(poster);

    });
});
// documentry
fetch(request.fetchDocumentaries)
.then((res) =>res.json())

.then((data) =>{
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Documentaries";
    row.appendChild(title);

    const row_posters= document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);
   
    data.results.forEach((movie)=>{
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row__poster";
        var s2 = movie.id;
        poster.id=s2;
        poster.src = img_url + movie.backdrop_path;
        row_posters.appendChild(poster);
    });
});

        
//     });

// })



