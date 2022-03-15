declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

//ts引入svg配置
declare module "*.svg" {
  const content: string;
  export default content;
}
