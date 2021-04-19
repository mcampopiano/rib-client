import { Button } from "reactstrap";
import React, { useContext, useEffect } from "react";
import { ClientContext } from "./ClientProvider";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export const ClientList = (props) => {
  const { clients, getClients } = useContext(ClientContext);
  const history = useHistory();

  useEffect(() => {
    getClients();
  }, []);

  return (
    <>
      <ul>
        {clients.map((client) => (
         <Link to={{pathname: `/clients/${client.id}`}}>
              <li key={client.id}>{client.name}</li>
              </Link>
        ))}
      </ul>
      <Button onClick={() => history.push("/clients/form")}>
        Add new client
      </Button>
    </>
  );
};
