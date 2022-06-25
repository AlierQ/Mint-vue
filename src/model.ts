const localStorageKey = "recordList";
const model = {
  fetch() {
    // 声明返回值为RecordItem
    return JSON.parse(
      window.localStorage.getItem(localStorageKey) || "[]"
    ) as RecordItem[];
  },
  save(data: RecordItem[]) {
    window.localStorage.setItem(localStorageKey, JSON.stringify(data));
  },
  clone(data: RecordItem | RecordItem[]) {
    return JSON.parse(JSON.stringify(data));
  },
};
export default model;
