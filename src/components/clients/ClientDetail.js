import React, { useContext, useEffect, useState } from "react";
import { ClientContext } from "./ClientProvider";
import { Spinner } from "reactstrap";

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
          </section>
        </div>
      </>
    );
  } else {
    return <Spinner color="danger" />;
  }
};
