const labelModel = {
  fetch(localStorageKey: string) {
    return JSON.parse(window.localStorage.getItem(localStorageKey) || "[]");
  },
  save(localStorageKey: string, data: any) {
    window.localStorage.setItem(localStorageKey, JSON.stringify(data));
  },
};
export default labelModel;
