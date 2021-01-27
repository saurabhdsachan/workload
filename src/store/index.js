import React, { useState } from "react";

export const WorkloadContext = React.createContext();

export const WorkloadProvider = ({ children }) => {
  const [workload, setWorkload] = useState([]);
  return (
    <WorkloadContext.Provider value={[workload, setWorkload]}>
      {children}
    </WorkloadContext.Provider>
  );
};
