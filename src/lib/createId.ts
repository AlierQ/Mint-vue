// id生成器
let inId: number = Number(window.localStorage.getItem("_inIdMax")) || 0;
let outId: number = Number(window.localStorage.getItem("_outIdMax")) || 0;

function createId(type: string) {
  if (type === "out") {
    outId++;
    window.localStorage.setItem("_outIdMax", outId.toString());
    return outId as number;
  } else if (type === "in") {
    inId++;
    window.localStorage.setItem("_inIdMax", inId.toString());
    return inId as number;
  }
}

export default createId;
