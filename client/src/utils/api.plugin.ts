import { prototype } from "vue/types/umd";
import axios from "axios";

const ApiPlugin = {
  install(Vue: any, options: any) {
    const HTTP = axios.create({
      baseURL: process.env.VUE_APP_API,
    });
    Vue.getIssues1 = async function() {
      const result = await HTTP.get("");
      const data = result.data;
      console.log("getting issues from plugin");
      return data.map((issue: any) => ({
        ...issue,
        createdAt: new Date(issue.createdAt),
      }));
    };
    Vue.prototype.$log = function() {
      console.log("log function");
    };
  },
};
export default ApiPlugin;
