import { Button } from "reactstrap";
import React, { useContext, useEffect } from "react";
import { ContractorContext } from "./ContractorProvider";
import { useHistory } from "react-router";

export const ContractorList = () => {
  const { contractors, getContractors } = useContext(ContractorContext);
  const history = useHistory();

  useEffect(() => {
    getContractors();
  }, []);

  return (
    <>
      <ul>
        {contractors.map((contractor) => (
          <li key={contractor.id}>{contractor.name}</li>
        ))}
      </ul>
      <Button onClick={() => history.push("/contractors/form")}>
        Add new contractor
      </Button>
    </>
  );
};
