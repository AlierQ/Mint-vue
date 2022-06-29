// 使svg能够被找到
declare module "*.svg" {
  const content: string;
  export default content;
}

// 声明自定义对象类型
type RecordItem = {
  // 可以写数据类型也可以写类(构造函数)
  type: string;
  tag: string;
  remake: string;
  amount: number;
  createTime: string; // ? 表示可以不存在
};
