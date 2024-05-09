import banner from "../assets/11.png";
import externado from "../assets/logo-uec.png";
import SprinklesAnimation from "../sprinkles/SprinklesAnimation";
import "./banner.css";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <img
          src={externado}
          alt="Logo universidad externado"
          className=""
          width={300}
        />
        <img src={banner} alt="Imagen Danna" className="responsive-image" />
      </div>
      <div className="banner-text">
        <h1>Danna Daniela</h1>
        <h1>Vargas Peña</h1>
        <p>Ábogada Especialista en Derecho Penal</p>
      </div>
    </>
  );
};

export default Banner;
