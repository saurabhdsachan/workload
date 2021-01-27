import React from "react";
import styled from "styled-components";
import NewWorkload from "./NewWorkload";
import WorkloadList from "./WorkloadList";

const ApplicationStyled = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: ${({ theme }) => theme.sizes.padding * 2}px;
`;

const Left = styled.div`
  display: grid;
`;

const Right = styled.div``;

const Application = () => {
  return (
    <ApplicationStyled>
      <Left>
        <WorkloadList />
      </Left>
      <Right>
        <NewWorkload />
      </Right>
    </ApplicationStyled>
  );
};

export default Application;
