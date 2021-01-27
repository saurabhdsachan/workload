import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import CONSTANT from "../constants";
import { WorkloadContext } from "../store";
import Button from "./Button";

const Buzz = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;

const WorkloadItemStyled = styled.div`
  position: relative;
  padding: ${({ theme }) => theme.sizes.padding}px;
  border: 1px solid ${({ theme }) => theme.color.blue};
  transition: all linear 0.1s;
  &:hover {
    background-color: ${({ theme }) => theme.color.soft.blue};
  }
  &.green {
    border: 1px solid ${({ theme }) => theme.color.green};
    background-color: ${({ theme }) => theme.color.soft.green};
  }
  &.blue {
    border: 1px solid ${({ theme }) => theme.color.blue};
    background-color: ${({ theme }) => theme.color.soft.blue};
  }
  &.red {
    border: 1px solid ${({ theme }) => theme.color.red};
    background-color: ${({ theme }) => theme.color.soft.red};
    animation: ${Buzz} 2s linear infinite;
  }
  .timestamp {
    font-size: 10px;
  }
`;

const WorkloadItem = ({ data }) => {
  const [workload, setWorkload] = useContext(WorkloadContext);
  const [ticker, setTicker] = useState(data.timer);
  const { id, complexity, status, completeDate, timer } = data;

  const handleDelete = () => {
    setWorkload(workload.filter((item) => item.id !== data.id));
  };

  const handleUpdate = (interval) => {
    let tmp = [...workload];
    clearInterval(interval);
    tmp.map((item) => {
      if (item.id === data.id && item.status !== CONSTANT.COMPLETED) {
        item.status = CONSTANT.COMPLETED;
      }
      return null;
    });
    setTicker(0);
    setWorkload(tmp);
  };

  useEffect(() => {
    const interval = setInterval(() => setTicker(ticker - 1), 1000);
    if (ticker === 0) {
      handleUpdate(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [ticker]);

  return (
    <WorkloadItemStyled
      className={[
        ticker < 3 && ticker !== 0 ? "red" : "green",
        status === "COMPLETED" ? "green" : "blue",
      ]}
    >
      <div>
        <small className="timestamp">
          Workload created {moment(completeDate).fromNow()}
        </small>
        <h3 className="uppercase">ID: #{id.split("-")[0]}</h3>
        <small>Status: {status}</small>
        <br />
        <small>Complexity: {complexity}</small>
        <br />
        <small>Workload Duration: {timer}</small>
        {ticker !== 0 && (
          <>
            <br />
            <hr />
            <small>Workload Expire in {ticker}s</small>
          </>
        )}
      </div>
      <Button size="xs" onClick={handleDelete}>
        Delete
      </Button>
      {status !== "COMPLETED" && (
        <Button size="xs" onClick={() => handleUpdate(id)}>
          Mark Complete
        </Button>
      )}
    </WorkloadItemStyled>
  );
};

export default React.memo(WorkloadItem);
