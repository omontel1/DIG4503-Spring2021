import Axios from 'axios';
import { useState } from 'react';

function GetMovie() {
    const[genre, setGenre] = useState("");
    const[title, setTitle] = useState("");
    const[director, setDirector] = useState("");
    const[year, setYear] = useState("");

    const getMovie = async() => {
        const response = await Axios.get("http://localhost:3000/movies/" + genre, {
            title: title,
            director: director,
            year: year
        });

        console.log(response.data);
    }

    return (
        <div>
        <p>
            <h2>Horror Movie Collection</h2>
            <br></br>
            <input
            type = "text"
            placeholder = "Genre"
            value={genre}
            onChange={(event) => setGenre(event.target.value)}
        />
            <input
            type = "text"
            placeholder = "Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
        />
            <input
            type = "text"
            placeholder = "Director"
            value={director}
            onChange={(event) => setDirector(event.target.value)}
        />
            <input
            type = "text"
            placeholder = "Year"
            value={year}
            onChange={(event) => setYear(event.target.value)}
        />
        <br></br>
        <button onClick = {() => {getMovie()}}>Search Movies</button>
        <br></br>
        </p>
    </div>
    );
}

export default GetMovie;