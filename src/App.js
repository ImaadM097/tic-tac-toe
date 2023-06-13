import React from "react";
import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

//ae03c0e7
const API_URL = 'http://www.omdbapi.com?apikey=ae03c0e7'



const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('The sting');
    }, []);

    return (
        <div className="app">
            <h1>JioMovies</h1>
            <div className="search">
                <input 
                    placeholder="Search for movies" 
                    value={searchTerm}
                    onChange={(e)=>{setSearchTerm(e.target.value);console.log(e)}}
                />
                <img 
                    src={SearchIcon} 
                    alt = "search"
                    onClick={()=>{searchMovies(searchTerm)}}
                />
            </div>
            {
                movies?.length > 0 ? 
                (
                    <div className="container">
                        {movies.map((movie)=> (
                            <MovieCard movie={movie} />
                        ))}
                    </div>

                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }
            
        </div>
    );
}

export default App;