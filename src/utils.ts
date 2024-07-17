export const formatDateToLocale = (date: Date) => {
  const newDate = new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "2-digit",
  };
  const formattedDate = newDate.toLocaleDateString("en-US", options);
  const [month, day] = formattedDate.split(" ");

  const time = newDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return {
    month,
    day,
    time,
  };
};
