import { useState,useEffect } from "react";
import "./style.css";
import { ImPlay2 } from "react-icons/im";

const Slide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState([]);

  

  const getSlider = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=b4c9bfd59aa4b6828f5c88e5093bc2f2"
    )
      .then((res) => res.json())
      .then((dataslide) => {
        setData(dataslide.results.slice(0,8));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getSlider();
  }, []);
//   const sliderInfo = [
//     {
//       id: 447277,
//       original_language: "en",
//       original_title: "The Little Mermaid",
//       backdrop_path: "/4t0oBFrJyweYPt0hocW6RUa0b6H.jpg",
//       overview:
//         "The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy.",
//       popularity: 2224.267,
//       poster_path: "/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
//       release_date: "2023-05-18",
//       title: "The Little Mermaid",
//       video: false,
//       vote_average: 6.1,
//       vote_count: 457,
//     },
//     {
//       id: 713704,
//       original_language: "en",
//       original_title: "Evil Dead Rise",
//       backdrop_path: "/2I5eBh98Q4aPq8WdQrHdTC8ARhY.jpg",
//       overview:
//         "Three siblings find an ancient vinyl that gives birth to bloodthirsty demons that run amok in a Los Angeles apartment building and thrusts them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
//       popularity: 2093.656,
//       poster_path: "/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg",
//       release_date: "2023-04-12",
//       title: "Evil Dead Rise",
//       video: false,
//       vote_average: 7.1,
//       vote_count: 1500,
//     },
//     {
//       id: 840326,
//       backdrop_path: "/1IM8i8HiomFC4y6NRyBuDrHJWg3.jpg",

//       original_language: "fi",
//       original_title: "Sisu",
//       overview:
//         "Deep in the wilderness of Lapland, Aatami Korpi is searching for gold but after he stumbles upon Nazi patrol, a breathtaking and gold-hungry chase through the destroyed and mined Lapland wilderness begins.",
//       popularity: 1830.349,
//       poster_path: "/ygO9lowFMXWymATCrhoQXd6gCEh.jpg",
//       release_date: "2023-01-27",
//       title: "Sisu",
//       video: false,
//       vote_average: 7.4,
//     },
//   ];

  return (
    <div className="main">
      <div className="overlay">
        <div className="container-movie">
          <h1 className="logo">{data[currentIndex]?.title}</h1>
          <p className="text-cover">{data[currentIndex]?.vote_average}</p>
          <p className="data">{data[currentIndex]?.release_date}</p>
          <div className="show-count">
          <div className="show-movie">
            <span>
              <ImPlay2 />
            </span>
            <p>Show trailer</p>
          </div>
          <div className="count-slide">
          <button disabled={currentIndex === 0} onClick={() => setCurrentIndex(currentIndex - 1)}>
            {"<"}
          </button>
          <span >
            {currentIndex + 1}/{data.length}
          </span>
          <button disabled={currentIndex +1 === data.length} onClick={() => setCurrentIndex(currentIndex + 1)}>
            {">"}
          </button>
          </div>
          </div>
        </div>
      </div>
      <div
        className="cover"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${data[currentIndex]?.backdrop_path}")`,
        }}
      ></div>
    </div>
  );
};

export default Slide;
