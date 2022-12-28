export const extractDateFromJSDate = (dateString) => {
  const regex = /([0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]))/g;
  return dateString.match(regex);
};

export const extractTimeFromJSDate = (dateString) => dateString.slice(11, 19);

export const convertToJSDate = (date, time) => `${date}T${time}`;
