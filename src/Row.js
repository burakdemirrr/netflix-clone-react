import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from './axios';
import Slider from "react-slick";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { ConnectingAirportsOutlined } from '@mui/icons-material';



    
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
    console.log(movies);
    const [scrollX, setScrollX]= useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0){
            x = 0;
        }
        setScrollX(x);
        console.log("hehe");
    }
    const handleRightArrow = () =>{
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = movies.
        length * 240;
        if(window.innerWidth - listW > x)
        {
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
        console.log("haha");
    }

    return (
        <div className="row">
        
            <h1>{title}</h1>
            <div className="movieRow-left" >
                <NavigateBeforeIcon style={{fontSize:50}} onClick={handleLeftArrow} />
            </div>
            <div className="movieRow-right">
                <NavigateNextIcon style={{fontSize:50}}  onClick={handleRightArrow}/>
            </div>
            <div className="row_posters" >
            <div className="movieRow--list" style={{
                    marginLeft :scrollX,
                    width: movies.length * 240,
                }}>
            
            {movies.map(movie=>(
             <img
                key={movie.id}
                className={`row_poster`}
                src={`${base_url}${movie.backdrop_path}`} alt={movie.name} />
            ))}</div>
            </div>
        </div>
    )
}

export default Row
