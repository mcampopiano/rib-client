import { Button } from "reactstrap";
import React, { useContext, useEffect } from "react";
import { ClientContext } from "./ClientProvider";
import { useHistory } from "react-router";

export const ClientList = () => {
  const { clients, getClients } = useContext(ClientContext);
  const history = useHistory();

  useEffect(() => {
    getClients();
  }, []);

  return (
    <>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>{client.name}</li>
        ))}
      </ul>
      <Button onClick={() => history.push("/clients/form")}>
        Add new client
      </Button>
    </>
  );
};
