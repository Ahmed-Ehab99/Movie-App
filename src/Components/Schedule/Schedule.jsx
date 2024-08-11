import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import "./Schedule.css";

export default function Schedule() {
  const filterList = [
    {
      _id: 1,
      name: "All",
      active: true,
    },
    {
      _id: 2,
      name: "Romance",
      active: false,
    },
    {
      _id: 3,
      name: "Action",
      active: false,
    },
    {
      _id: 4,
      name: "Thriller",
      active: false,
    },
    {
      _id: 5,
      name: "Horror",
      active: false,
    },
    {
      _id: 6,
      name: "Adventure",
      active: false,
    },
  ];

  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);
  const [filters, setFilters] = useState(filterList);

  async function getMovieData() {
    let { data } = await axios.get(`http://localhost:5173/data/movieData.json`);
    setData(data);
  }

  useEffect(() => {
    getMovieData();
  }, []);

  useEffect(() => {
    setMovies(data);
  }, [data]);

  function handleFilter(category) {
    const filterActive = filters.map((filter) => {
      filter.active = false;
      if (filter.name === category) {
        filter.active = true;
      }
      return filter;
    });
    setFilters(filterActive);
    if (category === "All") {
      setMovies(data);
      return;
    }
    const filterMovie = data.filter((movie) => movie.category === category);
    setMovies(filterMovie);
  }
  return (
    <>
      <section id="schedule" className="schedule">
        <div className="container-fluid">
          <div className="row">
            <h4 className="section-title">Opening this Week</h4>
          </div>
          <div className="row">
            <ul className="filters">
              {filters.map((filter) => (
                <li
                  key={filter._id}
                  className={`${filter.active ? "active" : undefined}`}
                  onClick={() => {
                    handleFilter(filter.name);
                  }}
                >
                  {filter.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="row mt-5">
            {movies && movies.length > 0
              ? movies.map((movie) => <Card key={movie._id} movie={movie} />)
              : ""}
          </div>
        </div>
      </section>
    </>
  );
}
