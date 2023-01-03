export const extractDateFromJSDate = (dateString) => {
  const regex = /([0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]))/g;
  return dateString.match(regex);
};

export const extractTimeFromJSDate = (dateString) => dateString.slice(11, 19);

export const convertToJSDate = (date, time) => `${date}T${time}`;

export const getCurrentClient = (timeslotsArray, id) =>
  timeslotsArray.find((x) => x.id === id);

const months = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};

export const convertDate = (date) => {
  const split = date.split("-");
  return `${split[2]} ${months[+split[1]]} ${split[0]}`;
};

export const unique = (array) => {
  return array.reduce((previous, current) => {
    if (
      !previous.find((prevItem) => {
        return prevItem.Date === current.Date;
      })
    ) {
      previous.push(current);
    }
    return previous;
  }, []);
};
