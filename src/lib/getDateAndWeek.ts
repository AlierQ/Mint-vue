import dayjs from "dayjs";

function getDateAndWeek(dateString: string) {
  const dayApi = dayjs(dateString);
  const month =
    dayApi.month() + 1 < 10 ? "0" + (dayApi.month() + 1) : dayApi.month() + 1;
  const date = dayApi.date() < 10 ? "0" + dayApi.date() : dayApi.date();
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
  return month + "月" + date + "日 " + week;
}

export default getDateAndWeek;
