
import './App.css';
import Row from './components/Row';
import requests from './request'
import Banner from './components/Banner';
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Nav/>
    <Banner/>
  <Row title="NETFLIX ORIGINALS"
  fetchUrl = {requests.fetchNetflixOriginals} isLargeRow = {true}/>
  <Row  title="TRENDING NOW"   fetchUrl={ requests.fetchTrending}    />
  <Row  title="ACTION MOVIES" fetchUrl={ requests.fetchActionMovies}  />
  <Row  title="TOP RATED" fetchUrl={ requests.fetchTopRated}/>
    </div>
  );
}

export default App;
