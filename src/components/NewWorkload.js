import React, { useContext, useState } from "react";
import styled from "styled-components";
import createWorkload from "../service";
import { WorkloadContext } from "../store/index";
import Button from "./Button";

const WorkloadFormStyled = styled.div`
  position: sticky;
  top: 0;
  @media (max-width:576px){
    h2{
      padding-left: ${({ theme }) => theme.sizes.padding}px;
      padding-right: ${({ theme }) => theme.sizes.padding}px;
    }
  }
`;

const WorkloadListStyled = styled.form`
  background-color: ${({ theme }) => theme.color.soft.blue};
  padding: ${({ theme }) => theme.sizes.padding}px;
`;

const RangeWrapper = styled.div`
  width: 100%;
`;

const InputStyled = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 25px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    background: ${({ theme }) => theme.color.blue};
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: ${({ theme }) => theme.color.blue};
    cursor: pointer;
  }
`;

const WorkloadList = () => {
  const [workload, setWorkload] = useContext(WorkloadContext);
  const [loading, setLoading] = useState(false);
  const [complexity, setComplexity] = useState(1);
  const handleRange = (e) => {
    setComplexity(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = await createWorkload(complexity);
    setWorkload([...workload, data]);
    setLoading(false);
  };
  return (
    <WorkloadFormStyled>
      <h2>{loading ? "Creating" : "Create"} a workload</h2>
      <WorkloadListStyled onSubmit={handleSubmit}>
        <RangeWrapper>
          <label>
            <p>Set Complexity - {complexity}</p>
            <br />
            <InputStyled
              type="range"
              min="1"
              max="10"
              value={complexity}
              onChange={handleRange}
            />
          </label>
        </RangeWrapper>
        <Button disabled={loading}>{loading ? "---" : "Submit"}</Button>
        <br />
        <br />
        <p>
          On Submit, Button will be disabled & mock service will resolve in
          random time. Then new workload will be created.
        </p>
      </WorkloadListStyled>
    </WorkloadFormStyled>
  );
};

export default WorkloadList;
