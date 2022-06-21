// 使svg能够被找到
declare module "*.svg" {
  const content: string;
  export default content;
}
