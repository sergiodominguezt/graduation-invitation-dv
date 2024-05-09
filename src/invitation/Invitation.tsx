import React from "react";
import "./invitation.css";
import hats from "../assets/graduation.png";

const Invitation = () => {
  return (
    <>
      <div className="image-graduation">
        <img src={hats} alt="Sombreros de graduacion" width={400} />
        <p>
          Expreso un profundo agradecimiento, a Dios, a mis abuelos, padres,
          hermanos, tíos, tías, primos, primas y amistades por el apoyo que me
          brindaron a lo largo de este camino. Ustedes han sido fundamentales
          para alcanzar este logro tan significativo. ¡Mi graduación también es
          de ustedes!
        </p>
      </div>
      <div className="invitation-text">
        <p>¡Te invito a celebrar conmigo!</p>
        <h2>20 . Junio . 2024</h2>
      </div>
    </>
  );
};
export default Invitation;
