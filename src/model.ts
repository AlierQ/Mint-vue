const localStorageKey = "recordList";
const model = {
  fetch() {
    return JSON.parse(window.localStorage.getItem(localStorageKey) || "[]");
  },
  save(data: RecordItem[]) {
    window.localStorage.setItem(localStorageKey, JSON.stringify(data));
  },
};
export default model;
