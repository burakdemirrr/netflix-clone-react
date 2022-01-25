import React, { useEffect, useState } from 'react'
import './Banner.css'
import requests from './requests';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { logout, useAuth } from './firebase';
import {  useNavigate } from 'react-router';
function Banner() {
    const [movies,setMovies]=useState([]);
    const navigate = useNavigate();

    const url="https://api.themoviedb.org/3";
    async function handlelogout() {
        try {
          await logout();
        }
        catch {
          alert("erorr");
        }
        navigate("/");
      }
    

        useEffect(() => {
            async function fetchData(){
            /*const request=await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;*/
            fetch(`${url}${requests.fetchNetflixOriginals}`)
            .then(response => response.json())
            .then(data=> {
                setMovies(data.results[Math.floor(Math.random() * data.results.length - 1)]);
            });
        }
        fetchData();
        
        },[]);
        console.log(movies);
        function truncate(str, n) {
            return str?.length > n ? str.substr(0, n - 1) + "..." :str;
        }
    return (


        
        <div className="main">
        <div className="banner"
        style={
            {backgroundSize:"cover",
            backgroundImage: `  linear-gradient(rgba(0, 2, 10, 0.3),rgba(0, 1, 3, 0.3)), url(
                "https://image.tmdb.org/t/p/original/${movies?.backdrop_path}" ) `,
            backgroundPosition:"center top",
          }
        }>
             <div className="navbar">
        <div className="logo">
        <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt=""
        className="nav_logo"
    />
        </div>
        <div className="lists">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Series</a></li>
            <li><a href="#">Films</a></li>
            <li><a href="#">New And Popular</a></li>
            <li><a href="#">My List</a></li>
        </ul>
        </div>
        <div className="navbar_right">
            <div className="search"><SearchIcon fontSize={'medium'} /></div>
            <div className="nots"><NotificationsIcon fontSize={'medium'}/></div>
            
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt=""
                  className="nav_avatar"
                  onClick={handlelogout}
             />
        </div>
    </div>

            <div className="banner_contents" >
                <h1 className="banner_title">{movies?.title || movies?.name || movies?.original_name} </h1>

               

                <h1 className="banner_description">
                {truncate(movies?.overview , 250)}
                </h1> 
                 <div className="banner_buttons">
                            <button className="banner_button1">Play</button>
                            <button className="banner_button2">More Info</button>
        </div>
            </div>
          
            <div className="banner_fadeBottom"></div>
            
        
                
        </div></div>
    )
}

export default Banner
