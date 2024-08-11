/* eslint-disable react/prop-types */
import "./TrendCard.css";

export default function TrendCard({ slide }) {
  return (
    <>
      <div className="trend-card">
        <img src={slide.previewImg} className="img-fluid" />
        <a href="#">
          Add to Calender <i className="fa-regular fa-calendar-days"></i>
        </a>
      </div>
    </>
  );
}
