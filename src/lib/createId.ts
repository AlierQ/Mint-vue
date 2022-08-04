// id生成器
let inId: number = Number(window.localStorage.getItem("inIdMax_vue")) || 4;
let outId: number = Number(window.localStorage.getItem("outIdMax_vue")) || 7;

function createId(type: string) {
  if (type === "out") {
    outId++;
    window.localStorage.setItem("outIdMax_vue", outId.toString());
    return outId as number;
  } else if (type === "in") {
    inId++;
    window.localStorage.setItem("inIdMax_vue", inId.toString());
    return inId as number;
  }
}

export default createId;
