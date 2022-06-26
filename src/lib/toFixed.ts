//2.强制保留2位小数，如：2，会在2后面补上00.即2.00
function toFixed(value: number, places: number) {
  if (isNaN(value)) {
    return false;
  }
  value = Math.round(value * 10 ** places) / 10 ** places;
  let str: string = value.toString();
  let index: number = str.indexOf(".");
  if (index < 0) {
    index = str.length;
    str += ".";
  }
  while (str.length <= index + places) {
    str += "0";
  }
  return str;
}
export default toFixed;
