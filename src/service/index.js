import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import CONSTANT from "../constants";

const createWorkload = (complexity) => {
  const id = uuidv4();
  const status = CONSTANT.WORKING;
  const completeDate = moment().add(complexity, "second").toDate();
  const timer = complexity * 10;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id,
        complexity,
        status,
        completeDate,
        timer,
      });
    }, Math.random() * 1000);
  });
};

export default createWorkload;
