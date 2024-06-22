//Define the make_Album function
function make_album(artist_name: string, album_title: string, tracks?: number){
    let album:{artist: string, title: string, tracks?: number} = {
        artist: artist_name,
        title: album_title,
    };

    if(tracks !== undefined){
        album.tracks = tracks;
    }

    return album;
}

//Calling three function  with different values
let album1 = make_album("Ahzam", "Album title 1");
let album2 = make_album("Ashad", "Album title 2");

//calling a make album function with 3rd parameter
let album3 = make_album("Maaz", "Album title 3", 10);

//Print values of our object created my function
console.log(album1);
console.log(album2);
console.log(album3); 