/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import Buttons from "../Buttons/Buttons";
import MovieSwiper from "../MovieSwiper/MovieSwiper";
import "./Banner.css";
import MainContent from "../MainContent/MainContent";
import BackToTop from "../BackToTop/BackToTop";

export default function Banner({ scroll }) {
  const [movies, setMovies] = useState([]);
  const [modal, setModal] = useState(false);
  const [iframeSrc, setIframeSrc] = useState("");

  async function getMovieData() {
    let { data } = await axios.get(
      `http://localhost:5173/data/movieData.json`
    );
    setMovies(data);
  }

  useEffect(() => {
    getMovieData();
  }, []);

  function handleSlideChange(id) {
    const newMovie = movies.map((movie) => {
      movie.active = false;
      if (movie._id == id) movie.active = true;
      return movie;
    });
    setMovies(newMovie);
  }

  return (
    <>
      <div className="banner">
        {movies && movies.length > 0
          ? movies.map((movie) => (
              <div key={movie._id} className="movie">
                <img
                  className={`bgImg ${movie.active ? "active" : undefined}`}
                  src={movie.bgImg}
                  alt="Background Image"
                />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div
                        className={`content ${
                          movie.active ? "active" : undefined
                        }`}
                      >
                        <img
                          src={movie.titleImg}
                          alt="Movie Title"
                          className="movie-title"
                        />
                        <h4>
                          <span>{movie.year}</span>
                          <span>
                            <i>{movie.ageLimit}</i>
                          </span>
                          <span>{movie.length}</span>
                          <span>{movie.category}</span>
                        </h4>
                        <p>{movie.description}</p>
                        <div className="buttons">
                          <Buttons
                            icon={<i className="fa-regular fa-bookmark"></i>}
                            name="Book"
                            color="#ff3700"
                            bgColor="#fff"
                            mRight="15px"
                          />
                          <Buttons
                            icon={<i className="fa-solid fa-plus"></i>}
                            name="My List"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6  col-md-12 col-sm-12 m-1024">
                      <div
                        className={`date ${
                          movie.active ? "active" : undefined
                        }`}
                      >
                        <h2>On {movie.date}</h2>
                      </div>
                      <div
                        className={`trailer ${
                          movie.active ? "active" : undefined
                        }`}
                      >
                        <a
                          href="#"
                          className="playBtn"
                          onClick={(e) => {
                            e.preventDefault();
                            setModal(!modal);
                            if (!modal) {
                              setIframeSrc(movie.video);
                            } else {
                              setIframeSrc("");
                            }
                          }}
                        >
                          <i className="fa-solid fa-play"></i>
                        </a>
                        <p>Watch Trailer</p>
                      </div>
                      {movie.active && (
                        <div className={`movieModal ${modal ? "active" : ""}`}>
                          <a
                            href=""
                            className="modalClose"
                            onClick={(e) => {
                              e.preventDefault();
                              setModal(!modal);
                              if (!modal) {
                                setIframeSrc(movie.video);
                              } else {
                                setIframeSrc("");
                              }
                            }}
                          >
                            <i className="fa-solid fa-xmark"></i>
                          </a>
                          <iframe
                            width="600px"
                            height="500"
                            src={iframeSrc}
                            title={`${movie.title} | Official Trailer`}
                            frameBorder="0"
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          ></iframe>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          : ""}
        {movies && movies.length > 0 ? (
          <MovieSwiper handleSlideChange={handleSlideChange} slides={movies} />
        ) : (
          ""
        )}
      </div>
      <MainContent />
      <BackToTop scroll={scroll} />
    </>
  );
}
