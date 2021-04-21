import React from "react";
import { Route } from "react-router";
import { ClientList } from "./clients/ClientList";
import { ClientProvider } from "./clients/ClientProvider";
import { ContractorList } from "./contractors/ContractorList";
import { ContractorProvider } from "./contractors/ContractorProvider";
import { ClientForm } from "./clients/ClientForm";
import { ContractorForm } from "./contractors/ContractorForm";
import { ClientDetail } from "./clients/ClientDetail";
import { RoomForm } from "./rooms/RoomForm";
import { RoomProvider } from "./rooms/RoomProvider";
import { ContractorDetail } from "./contractors/ContractorDetail";

export const ApplicationViews = () => {
  return (
    <>
      <ClientProvider>
        <Route
          exact
          path="/clients"
          render={(props) => <ClientList {...props} />}
        />
      </ClientProvider>
      <ContractorProvider>
        <Route exact path="/contractors">
          <ContractorList />
        </Route>
        <Route
          path="/contractors/:contractorId(\d+)"
          render={(props) => <ContractorDetail {...props} />}
        />
        <Route path="/contractors/form">
          <ContractorForm />
        </Route>
      </ContractorProvider>
      <ClientProvider>
        <ContractorProvider>
          <Route path="/clients/form">
            <ClientForm />
          </Route>
          <Route
            path="/clients/:clientId(\d+)"
            render={(props) => <ClientDetail {...props} />}
          />
        </ContractorProvider>
      </ClientProvider>
      <ClientProvider>
        <RoomProvider>
          <Route
            path="/rooms/form/:clientId(\d+)"
            render={(props) => <RoomForm {...props} />}
          />
        </RoomProvider>
      </ClientProvider>
    </>
  );
};
