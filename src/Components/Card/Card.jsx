/* eslint-disable react/prop-types */
import "./Card.css";

export default function Card({ movie }) {
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div className="movie-card">
          <img
            src={movie.previewImg}
            alt="Preview Image"
            className="img-fluid"
          />
          <p>
            {movie.length} | {movie.category}
          </p>
          <div className="content">
            <h4>{movie.title}</h4>
            <div className="card-icons">
              <i className="fa-solid fa-plus"></i>
              <i className="fa-solid fa-play"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
