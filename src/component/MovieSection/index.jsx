import "./style.css";

//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNGM5YmZkNTlhYTRiNjgyOGY1Yzg4ZTUwOTNiYzJmMiIsInN1YiI6IjY0N2RiNThhY2Y0YjhiMDEwMzFmNDU0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.llgC_zvxZyz2JXtGL1ifsnxF8FKHEEpOOHMp0WFp45w


//b4c9bfd59aa4b6828f5c88e5093bc2f2
const MovieSection = ({ title, list }) => {
  return (
    <div className="movie-section">
      <div className="tap-movie">
        <div className="container-movie">
          <h1>{title}</h1>
          <h1 className="dot">. . .</h1>
        </div>
      </div>

      <div className="section-scroll">
        <div className="container-movie">
          <div className="list">
            {list.map((el) => (
              <div className="card">
                <div className="image">
                  <img src={`https://image.tmdb.org/t/p/original${el?.poster_path}`} />
                </div>
                <p>{el.title}</p>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieSection;
