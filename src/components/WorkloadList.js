import React, { useContext } from "react";
import styled from "styled-components";
import { WorkloadContext } from "../store/index";
import Empty from "./Empty";
import WorkloadItem from "./WorkloadItem";

const WorkloadListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(150px, 1fr));
  grid-gap: ${({ theme }) => theme.sizes.padding}px;
  @media (max-width:576px){
    grid-template-columns: repeat(1,minmax(100%,1fr));
  }
`;

const EmptyList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WorkloadList = () => {
  const [workload] = useContext(WorkloadContext);

  return (
    <>
      <h2>Workloads</h2>
      {workload.length !== 0 ? (
        <WorkloadListStyled>
          {workload.map((item) => (
            <WorkloadItem key={item.id} data={item} />
          ))}
        </WorkloadListStyled>
      ) : (
        <EmptyList>
          <Empty />
          <p>Create a new workload</p>
        </EmptyList>
      )}
    </>
  );
};

export default WorkloadList;
