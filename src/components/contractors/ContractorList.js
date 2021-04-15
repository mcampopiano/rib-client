import React, { useContext, useEffect } from "react";
import { ContractorContext } from "./ContractorProvider";

export const ContractorList = () => {
  const { contractors, getContractors } = useContext(ContractorContext);

  useEffect(() => {
    getContractors();
  }, []);

  return (
    <ul>
      {contractors.map((contractor) => (
        <li key={contractor.id}>{contractor.name}</li>
      ))}
    </ul>
  );
};
