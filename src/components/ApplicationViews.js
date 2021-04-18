import React from "react";
import { Route } from "react-router";
import { ClientList } from "./clients/ClientList";
import { ClientProvider } from "./clients/ClientProvider";
import { ContractorList } from "./contractors/ContractorList";
import { ContractorProvider } from "./contractors/ContractorProvider";
import {ClientForm} from "./clients/ClientForm";
import {ContractorForm} from "./contractors/ContractorForm"

export const ApplicationViews = () => {
  return (
    <>
      <ClientProvider>
        <Route exact path="/clients">
          <ClientList />
        </Route>
      </ClientProvider>
      <ContractorProvider>
          <Route exact path="/contractors">
              <ContractorList />
          </Route>
          <Route path="/contractors/form">
              <ContractorForm />
          </Route>
      </ContractorProvider>
      <ClientProvider>
        <ContractorProvider>
          <Route path="/clients/form">
            <ClientForm />
          </Route>
        </ContractorProvider>
      </ClientProvider>
    </>
  );
};
