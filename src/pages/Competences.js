import React from "react";
import Header from "../components/Header";

// function DebutantStar() {
//   return (
//     <div className="star">
//       <i className="fa-solid fa-star lightYellow"></i>
//       <i className="fa-solid fa-star darkYellow"></i>
//       <i className="fa-solid fa-star darkYellow"></i>
//     </div>
//   );
// }

function IntermediaireStar() {
  return (
    <div className="star">
      <i className="fa-solid fa-star lightYellow"></i>
      <i className="fa-solid fa-star lightYellow"></i>
      <i className="fa-solid fa-star darkYellow"></i>
    </div>
  );
}

function ProStar() {
  return (
    <div className="star">
      <i className="fa-solid fa-star lightYellow"></i>
      <i className="fa-solid fa-star lightYellow"></i>
      <i className="fa-solid fa-star lightYellow"></i>
    </div>
  );
}

const Competences = () => {
  return (
    <div>
      <Header />
      <div className="content-competences">
        <div className="competences-langages-experiences">
          <div className="competences-langages">
            <h1>Langages Principaux</h1>
            <div className="langages-item">
              <div className="item-title">
                <h3>HTML</h3>
                <i className="fa-brands fa-html5 logo"></i>
              </div>
              <ProStar />
            </div>
            <div className="langages-item">
              <div className="item-title">
                <h3>CSS</h3>
                <i className="fa-brands fa-css3 logo"></i>
              </div>
              <ProStar />
            </div>
            <div className="langages-item">
              <div className="item-title">
                <h3>Bootstrap</h3>
                <i className="fa-brands fa-bootstrap logo"></i>
              </div>
              <ProStar />
            </div>
            <div className="langages-item">
              <div className="item-title">
                <h3>Sass</h3>
                <i className="fa-brands fa-sass logo"></i>
              </div>
              <ProStar />
            </div>
            <div className="langages-item">
              <div className="item-title">
                <h3>Javascript</h3>
                <i className="fa-brands fa-js logo"></i>
              </div>
              <IntermediaireStar />
            </div>
            <div className="langages-item">
              <div className="item-title">
                <h3>React JS</h3>
                <i className="fa-brands fa-react logo"></i>
              </div>
              <IntermediaireStar />
            </div>
          </div>
          <div className="competences-experiences">
            <h1>Experiences</h1>
            <div className="experiences-item">
              <h3>D??veloppeur Web</h3>
              <h5>Coqliqo</h5>
              <p>
                Participation au projet de portage multi-navigateurs suite ?? la
                proche extinction d'Internet Explorer. Correction des diff??rents
                probl??me Front-end li??s au changement de navigateurs, refonte
                graphique d'une application web de SAV pour Conforama.
              </p>
            </div>
            <div className="experiences-item">
              <h3>Formation autodidacte</h3>
              <h5>Plateforme Dyma</h5>
              <p>
                Je me forme en autodidacte via une plateforme de cours en ligne
                de qualit?? destin??e aux entreprises. J'ai particip?? a des cours
                de remise ?? niveau en HTML/CSS/SASS modernes. J'ai aussi fini
                les formations Git/GitHub. Et je suis actuellement entrain de
                suivre la formation React JS.{" "}
                <a
                  href="https://dyma.fr/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Dyma.fr
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="competences-autres-interets">
          <div className="competences-autres">
            <h1>Autres comp??tences</h1>
            <div className="competences-listes">
              <ul>
                <li>
                  <div className="logo">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  PHP
                </li>
                <li>
                  <div className="logo">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  Python
                </li>
                <li>
                  <div className="logo">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  TailWind CSS
                </li>
                <li>
                  <div className="logo">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  Git/Github
                </li>
              </ul>
              <ul>
                <li>
                  <div className="logo">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  C
                </li>
                <li>
                  <div className="logo">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  Java
                </li>
                <li>
                  <div className="logo">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  M??thode agile
                </li>
                <li>
                  <div className="logo">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  Anglais
                </li>
              </ul>
            </div>
          </div>
          <div className="competences-interets">
            <h1>Int??r??ts</h1>
            <ul>
              <li> - Football</li>
              <li> - Jeux-vid??o</li>
              <li> - Voyage</li>
              <li> - Informatique</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competences;
