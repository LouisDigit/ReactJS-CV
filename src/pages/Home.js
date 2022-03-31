import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <div className="home-title">
          <div className="home-title-content">
            <h1>
              <span className="text-red">L</span>ouis{" "}
              <span className="text-red">V</span>anoise
            </h1>
            <h3>Développeur Web Front-end</h3>
            <p>
              Spécialisé en React <i className="fa-brands fa-react"></i>
            </p>
            <p className="explication">
              Passioné d'informatique et de programmation, actuellement en 4ème
              année à EPITECH Lille. Le domaine de la programmation web
              m'intéresse plus particulièrement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
