import dayjs from "dayjs";

function getWeekOfYear(dateValue: string) {
  const nowYear = dayjs(dateValue).year();
  let firstWeek = dayjs(nowYear + "-1-1");
  const date = dayjs(dateValue);
  while (firstWeek.day().toString() !== "1") {
    firstWeek = firstWeek.add(1, "day");
  }
  return (
    "第" +
    Math.ceil((date.valueOf() - firstWeek.valueOf()) / (7 * 86400000)) +
    "周"
  );
}

export default getWeekOfYear;
