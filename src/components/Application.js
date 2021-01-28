import React from "react";
import styled from "styled-components";
import NewWorkload from "./NewWorkload";
import WorkloadList from "./WorkloadList";

const ApplicationStyled = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: ${({ theme }) => theme.sizes.padding * 2}px;
  @media (max-width:576px){
    grid-template-columns: 1fr;
  }
`;

const Left = styled.div`
  display: grid;
  @media (max-width:576px){
    padding-bottom:40vh;
  }
`;

const Right = styled.div`
  @media (max-width:576px){
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: white;
      box-shadow: 0px -5px 4px 0px ${({ theme }) => theme.color.soft.black};
  }
`;

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
