// baseURL:'https://api.themoviedb.org/3'
const API_KEY= '47de2b9e8b2462b53975d18185ac40bf'

const requests = {
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:  `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&width_genres=28`
}

export default requests;