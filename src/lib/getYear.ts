import dayjs from "dayjs";

function getYear(dateValue: string) {
  return dayjs(dateValue).format("YYYY年");
}
export default getYear;
