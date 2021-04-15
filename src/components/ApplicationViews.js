import React from "react";
import { Route } from "react-router";
import { ClientList } from "./clients/ClientList";
import { ClientProvider } from "./clients/ClientProvider";

export const ApplicationViews = () => {
  return (
    <>
      <ClientProvider>
        <Route exact path="/">
          <ClientList />
        </Route>
      </ClientProvider>
    </>
  );
};
