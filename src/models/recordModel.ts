const localStorageKey = "recordList_vue";
const recordModel = {
  fetch() {
    // 声明返回值为RecordItem
    return JSON.parse(
      window.localStorage.getItem(localStorageKey) || "[]"
    ) as RecordItem[];
  },
  save(data: RecordItem[]) {
    window.localStorage.setItem(localStorageKey, JSON.stringify(data));
  },
};
export default recordModel;
