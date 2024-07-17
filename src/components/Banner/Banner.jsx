import "./Banner.css";
import Title from "../Title/Title.jsx";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__content">
        <Title title="FRONTEND" />
        <div>
          <h3>Como pensar como programador?</h3>
          <p>
            ¿Cuáles son las principales características de un programador? ¿Qué
            habilidades y competencias debe tener alguien que quiere seguir esa
            carrera? En este video Christian Velasco nos habla de las
            principales características de un Programador.
          </p>
        </div>
      </div>
      <div className="banner-video">
        <a href="https://www.youtube.com/watch?v=ov7vA5HFe6w" target="blank">
          <img
            src="/Img/banner-video.png"
            alt="video about practicing english with chatGPT"
          />
        </a>
      </div>
    </div>
  );
};

export default Banner;
