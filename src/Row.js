import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from './axios';
import Slider from "react-slick";

    
function Row({title,fetchUrl,isLargeRow}) {
    const [movies,setMovies]=useState([]);
    const base_url="https://image.tmdb.org/t/p/original/";

   
    useEffect(() => {
        async function fetchData(){
        const request=await axios.get(fetchUrl);
        setMovies(request.data.results)
        return request;
        /*fetch("https://api.themoviedb.org/3"+fetchUrl)
        .then(response => response.json())
        .then(data=> {
            setMovies(data.results);*/
        
    }
    fetchData();
    },[fetchUrl]);

    return (
        <div className="row">
        
            <h1>{title}</h1>
            <div className="row_posters">
            
            {movies.map(movie=>(
             <img
                key={movie.id}
                className={`row_poster`}
                src={`${base_url}${movie.backdrop_path}`} alt={movie.name} />
            ))}
            </div>
        </div>
    )
}

export default Row
