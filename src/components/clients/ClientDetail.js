import React, { useContext, useEffect, useState } from "react";
import { ClientContext } from "./ClientProvider";
import {
  Spinner,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

export const ClientDetail = (props) => {
  const { getClientById } = useContext(ClientContext);
  const [client, setClient] = useState(null);
  const id = parseInt(props.match.params.clientId);

  useEffect(() => {
    getClientById(id).then(setClient);
  }, []);

  if (client !== null) {
    return (
      <>
        <h1>{client.name}</h1>
        <div className="clientDetails">
          <section className="contractor">
            <h2>Contractor</h2>
            <p>{client.contractor.name}</p>
          </section>
          <section className="rooms">
            <h2>Rooms</h2>
            {client.rooms.map((room) => (
              <div>
                <Card>
                  <CardBody>
                    <CardTitle tag="h5">{room.name}</CardTitle>
                    <CardText>
                      <h6>Dimensions</h6>
                      <ul>
                        <li>Length: {room.length}</li>
                        <li>Width: {room.width}</li>
                        <li>Height: {room.height}</li>
                      </ul>
                      <h6>Airmovers required:</h6>
                      {room.air_movers_min} - {room.air_movers_max}
                      <h6>Dehumidifier size range</h6>
                      {room.dehumidifier_min_size} - {room.dehumidifier_max_size}
                    </CardText>
                    <Button>Button</Button>
                  </CardBody>
                </Card>
              </div>
            ))}
          </section>
        </div>
      </>
    );
  } else {
    return <Spinner color="danger" />;
  }
};
