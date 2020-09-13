import moment from "moment";

export const timeDateMinutes = (timeStampValue) => {
  return moment(timeStampValue).format("LLL");
};
