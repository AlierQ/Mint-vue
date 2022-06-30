import getWeekOfYear from "@/lib/getWeekOfYear";
import dayjs from "dayjs";

function getEchartsX(array: any[], type: string) {
  let x = [];
  if (type === "week") {
    const count = Number(getWeekOfYear(new Date().toISOString()).slice(1, -1));
    for (let i = 0; i < 5; i++) {
      x.push("第" + (count - i) + "周");
    }
    return x.reverse();
  } else if (type === "month") {
    const count = dayjs().month() + 1;
    for (let i = 0; i < 5; i++) {
      x.push((count - i < 10 ? "0" + (count - i) : count - i) + "月");
    }
    return x.reverse();
  } else if (type === "year") {
    const count = dayjs().year();
    for (let i = 0; i < 5; i++) {
      x.push(count - i + "年");
    }
    return x.reverse();
  }
}

export default getEchartsX;
