import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import requests from "./Request";
import Row from "./components/Row";

function App() {
  const baseURL = "https://api.themoviedb.org/3";
  return (
    <div className="App">
      <Nav />
      <Banner fetchUrl={baseURL + requests.fetchNetflixOriginals} />
      <Row
        title="NETFLIX ORINALS"
        fetchUrl={baseURL + requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={baseURL + requests.fetchtrending} />
      <Row title="Top Rated" fetchUrl={baseURL + requests.fetchTopRated} />
      <Row
        title="Action Movies"
        fetchUrl={baseURL + requests.fetchActionMovies}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={baseURL + requests.fetchComedyMovies}
      />
      <Row
        title="Horror Movies"
        fetchUrl={baseURL + requests.fetchHorrorMovies}
      />
      <Row
        title="Romantic Movies"
        fetchUrl={baseURL + requests.fetchRomanceMovies}
      />
      <Row
        title="Documentaries Movies"
        fetchUrl={baseURL + requests.fetchDocumentaries}
      />
    </div>
  );
}

export default App;
