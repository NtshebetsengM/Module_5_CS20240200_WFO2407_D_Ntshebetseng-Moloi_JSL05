// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    //----------------------added songs----------------------//
    { title: "Why Don't You", artist: "Cleo Sol", genre: "Neo-Soul" },
    { title: "Say My Name", artist: "Destiny's Child", genre: "R&B" },
    { title: "Cranes in the Sky", artist: "Solange", genre: "Neo-Soul" },
    { title: "Red Room", artist: "Hiatus Kaiyote", genre: "Neo-Soul" },
    { title: "Not like us", artist: "Kendrick Lamar", genre: "Hip Hop" },
    { title: "One Dance", artist: "Drake", genre: "Hip Hop" },
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    // Add preferences for Drax, Rocket, and Groot
    "Drax": "R&B",
    "Rocket": "Hip Hop",
    "Groot": "Neo-Soul",
};

// Function to generate playlist based on preferred genre
const generatePlaylist= (guardians, songs) => {
    // Use the map() function to create playlists for each Guardian
    // Your code here
    return Object.entries(guardians).map(([guardianName, preferedGenre]) =>{
        const playlist = songs.filter( song => song.genre === preferedGenre);
       return{guardianName, playlist} 
    })
}

// Call generatePlaylist and display the playlists for each Guardian


const guardianPlaylists = generatePlaylist(guardians, songs);

const displayPlaylists = guardianPlaylists.forEach(({guardianName, playlist}) => {
    createBlock( guardianName, playlist)
})



function createBlock(guardianName, playlist){
    const playlists = document.getElementById('playlists') 
    const newList = document.createElement('div')
    
    newList.innerHTML = `<h2> ${guardianName}'s Playlist </h2>
                         <ul></ul>`

    const ul = newList.querySelector('ul')
    ul.style.listStyleType = 'none';
    playlists.appendChild(newList)
    
    
    
    playlist.forEach(song =>{
        const li = document.createElement('li')
        const span = document.createElement('span')
        
        const songTitle = song.title
        span.textContent = `${songTitle} `
        span.classList.add("song-title")
        li.appendChild(span)

        const artistName = song.artist
        li.innerHTML += `by ${artistName}`
        ul.appendChild(li)    
        li.classList.add("song")
})

newList.classList.add("playlist")
playlists.appendChild(newList)
}