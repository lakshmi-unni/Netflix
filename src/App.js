import './App.css';
import Banner from './Components/Banner';
import Row from './Components/Row';
import requests from './request';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
        <Nav />
        <Banner/>
        <Row 
        title ="NETFLIX ORGINALS"
        fetchUrl ={requests.fetchNetflixOriginals}/>

       <Row 
        title ="TRENDING NOW"
        fetchUrl ={requests.fetchTrending}/>

      <Row 
        title ="TOP RATED"
        fetchUrl ={requests.fetchTopRated}/>

      <Row 
        title ="ACTION MOVIES"
        fetchUrl ={requests.fetchActionMovies}/>

     <Row 
        title ="COMEDY MOVIES"
        fetchUrl ={requests.fetchComedyMovies}/>

     <Row 
        title ="HORROR MOVIES"
        fetchUrl ={requests.fetchHorrorMovies}/>

    <Row 
        title ="ROMANCE MOVIES"
        fetchUrl ={requests.fetchRomanceMovies}/>

    <Row 
        title ="DOCUMENTARIES"
        fetchUrl ={requests.fetchDocumentaries}/>

         
    </div>
  );
}

export default App;
