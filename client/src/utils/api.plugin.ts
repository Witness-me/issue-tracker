import axios from "axios";
import { prototype } from "vue/types/umd";

const url = process.env.VUE_APP_API;

const ApiPlugin = {
  install(Vue: any, options: any) {
    Vue.prototype.$getIssues = async function() {
      const result = await axios.get(url);
      const data = result.data;
      console.log("getting issues");
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
