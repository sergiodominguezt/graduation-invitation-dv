import "./eventdetails.css";
import { Card } from "react-bootstrap";
import { SiGooglemaps } from "react-icons/si";
import { FaWaze } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import check from "../assets/check.png";

const EventDetails = () => {
  return (
    <>
      <div className="event-details-title">
        <h2>Detalles del evento</h2>
      </div>
      <div className="event-details-container">
        <Card style={{ width: "18rem" }} className="event-card">
          <Card.Body>
            <Card.Title>20 de Junio</Card.Title>
            <Card.Title>08:00 PM</Card.Title>
            <Card.Text>Calle 104B #7 - 16 Porvenir</Card.Text>
            <div className="event-button">
              <a
                href="https://maps.app.goo.gl/ju4BkUpfE7VqVaGt5"
                target="_blank"
              >
                <button className="button">
                  <SiGooglemaps /> Como llegar
                </button>
              </a>

              <a href="https://waze.com/ul/hd3k0017y0" target="_blank">
                <button className="button">
                  <FaWaze /> Como llegar
                </button>
              </a>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="confirmation-container">
        <Card style={{ width: "18rem" }} className="event-card">
          <Card.Body>
            <div className="check-image">
              <img src={check} alt="Icono de confirmacion" width={100} />
            </div>
            <Card.Text>Tu presencia significa mucho para mi </Card.Text>
            <div className="confirmation-button">
              <a
                href="https://maps.app.goo.gl/ju4BkUpfE7VqVaGt5"
                target="_blank"
              >
                <button className="button">
                  <FaWhatsapp /> Confirmar asistencia
                </button>
              </a>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default EventDetails;
