import dayjs from "dayjs";

function getMonthOfYear(dateValue: string) {
  const date = dayjs(dateValue);
  return date.format("MM月");
}
export default getMonthOfYear;
