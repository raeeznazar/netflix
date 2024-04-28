import React,{useEffect,useState} from 'react'
import instance from '../axios'
import '../components/row.css'
const base_url = "https://image.tmdb.org/t/p/original/"

function Row({title,fetchUrl,isLargeRow }) {
    const [movies,setMovies]=useState([])

    useEffect(()=>{
        async function fetchData(){
            const request = await instance.get(fetchUrl)
            setMovies(request.data.results)
        }
        fetchData()
    },[])
    console.log('Our movies is', movies)
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row__posters'>
            {movies.map((movie)=>(
                <img key={movie.id}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`} alt={movie.name}
                src={`${base_url}${movie.poster_path}`}
                />
            ))}
        </div>
    </div>
  )
}

export default Row
