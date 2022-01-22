import React from 'react'

function Movie(id,source) {
    const base_url="https://image.tmdb.org/t/p/original/";

    return (
             <img
                key={id}
                className={`row_poster`}
                src={source} />
    )
}

export default Movie
