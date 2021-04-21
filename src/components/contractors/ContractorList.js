import { Button } from "reactstrap";
import React, { useContext, useEffect } from "react";
import { ContractorContext } from "./ContractorProvider";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

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
          <Link to={`/contractors/${contractor.id}`}>
            {" "}
            <li key={contractor.id}>{contractor.name}</li>
          </Link>
        ))}
      </ul>
      <Button onClick={() => history.push("/contractors/form")}>
        Add new contractor
      </Button>
    </>
  );
};
