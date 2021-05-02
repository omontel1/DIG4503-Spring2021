import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import SearchBar from '../Search Bar';
import MovieList from '../Movie List';
import Refresh from '../Refresh';

const HomePage = (props) => {
    const [input, setInput] = useState('');
    const [movieListDefault, setMovieListDefault] = useState();
    const [movieList, setMovieList] = useState();

    const fetchData = async() => {
        return await fetch('')
        .then(response => response.json())
        .then(data => {
            setMovieList(data)
            setMovieListDefault(data)
        });}

const updateInput = async (input) => {
    const filtered = movieListDefault.filter(movie => {
        return movie.name.toLowerCase().includes(input.toLowerCase())
    })
    setInput(input);
    setMovieList(filtered);
}

useEffect(() => {fetchData()}, []);

return (

    <div className="App">
    <h1>The Horror VHS Tapes Collection</h1>
    <Refresh />
    <br></br>
    <SearchBar
        input={input}
        onChange={updateInput}
    />

    <MovieList movieList={movieList}/>
    
    <p>
    <h2>ABOUT US</h2>
    
    <br></br>
    <li>The Horror VHS Tapes Collection is an independently owned champion of the horror genre, established in 2021.</li>
    <br></br>
    <li>Got a tip? Want to advertise with us? <Link>Contact us here.</Link></li>
    <br></br>
    <li>Looking to contribute to our horror movie collection? Please contact <Link>Omar Montelongo / Managing Editor</Link></li>
    <br></br> 
    <li><Link to="/User Page">Sign Up for Our Newsletter!</Link></li>
    <br></br>
    <img src="https://i.pinimg.com/originals/fe/9b/d1/fe9bd12c5ed2420cd93772c6ef3ec99d.gif" />
    </p>
    </div>
    );
}

export default HomePage;