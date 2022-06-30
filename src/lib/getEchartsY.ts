function getEchartsY(array: any[], type: string, x: any[]) {
  let y = [0, 0, 0, 0, 0];
  if (type === "week") {
    array.forEach((item: any) => {
      const index = x.indexOf(item.title);
      if (index !== -1) {
        y[index] = Math.round(item.sum * 100) / 100;
      }
    });
    return y;
  } else if (type === "month") {
    array.forEach((item: any) => {
      const index = x.indexOf(item.title);
      if (index !== -1) {
        y[index] = Math.round(item.sum * 100) / 100;
      }
    });
    return y;
  } else if (type === "year") {
    array.forEach((item: any) => {
      const index = x.indexOf(item.title);
      if (index !== -1) {
        y[index] = Math.round(item.sum * 100) / 100;
      }
    });
    return y;
  }
}

export default getEchartsY;
