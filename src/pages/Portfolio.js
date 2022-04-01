import React from "react";
import Header from "../components/Header";
import cafe from "./../media/cafe.png";
import journal1 from "./../media/journal1.png";
import journal2 from "./../media/journal2.png";
import ledor from "./../media/ledor.png";

const Portfolio = () => {
  return (
    <div>
      <Header />
      <div className="content-portfolio">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={cafe} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={ledor} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={journal1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={journal2} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
