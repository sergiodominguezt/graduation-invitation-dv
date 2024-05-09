import "./memories.css";
import memories from "../assets/clock.png";
import timeline from "../assets/2.png";

const Memories = () => {
  return (
    <>
      <div className="memories-image">
        <img src={memories} alt="Icono memorias" width={100} />
      </div>
      <div className="memories-text">
        <h2>Recuerdos</h2>
      </div>
      <div className="memories-timeline">
        <img src={timeline} alt="Timeline de recuerdos" />
      </div>
    </>
  );
};

export default Memories;
