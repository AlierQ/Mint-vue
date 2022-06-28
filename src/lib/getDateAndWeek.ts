import dayjs from "dayjs";

function getDateAndWeek(dateString: string) {
  const dayApi = dayjs(dateString);
  const string = dayApi.format("MM月DD日");
  const weekList = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];
  const week = weekList[dayApi.day()];
  return string + " " + week;
}

export default getDateAndWeek;
