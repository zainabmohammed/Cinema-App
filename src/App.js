// import { Routes, Route } from "react-router-dom";
// import { useStore } from "./Store";
// import HomeScreen from "./screens/homeScreen";
// import AboutScreen from "./screens/aboutScreen";
// import MainHeader from "./component/Global/MainHeader";
import { useEffect, useState } from "react";
import "./App.css";
import HeaderApp from "./component/Header";
import MovieSection from "./component/MovieSection";
import Slide from "./component/slide";

function App() {
  // const { lang } = useStore();
  const [topRateList, setTopRateList] = useState([]);
  const [Popularlist, setPopularList] =useState([]);
  const [upcominglist ,setUpComingList]=useState([]);

  const loadTopRateMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=b4c9bfd59aa4b6828f5c88e5093bc2f2"
    )
      .then((res) => res.json())
      .then((data) => {
        setTopRateList(data.results);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadTopRateMovies();
  }, []);

  const loadPopularMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=b4c9bfd59aa4b6828f5c88e5093bc2f2"
    )
    .then((res) => res.json())
    .then((datapop) =>{
      setPopularList(datapop.results);
    })
    .catch((err) => console.log(err));
  };
  useEffect(() => {
   loadPopularMovies();
  }, []);

  const loadUpComingMovies = ()  =>{
    fetch(
     "https://api.themoviedb.org/3/movie/upcoming?api_key=b4c9bfd59aa4b6828f5c88e5093bc2f2"
    )
    .then((res) => res.json())
    .then((dataupcoming) =>{
      setUpComingList(dataupcoming.results)
    })
    .catch((err) =>console.log(err));
  };

  useEffect(()=>{
    loadUpComingMovies();
  },[]);

  



  return (
    <div>
      <HeaderApp />
      <Slide />
      
      <MovieSection title={"Top Rate"} list={topRateList} />
      <MovieSection title={"Must Popular"} list={Popularlist} />
      <MovieSection title={"Up Coming"} list={upcominglist} />
      {/* <MovieSection title={"Must Popular"} list={movieList2} />
      <MovieSection title={"Up Coming"} list={movieList} /> */}
    </div>
    // <div className={`App ${lang === "ar" ? "ar-container" : ""}`}>
    //   <MainHeader />
    //   <Routes>
    //     <Route excat path="/" element={<HomeScreen />} />
    //     <Route path="/about" element={<AboutScreen />} />
    //   </Routes>
    // </div>
  );
}

export default App;
