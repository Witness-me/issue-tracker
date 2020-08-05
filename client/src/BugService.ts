import axios from "axios";

const url = "http://localhost:5000/api/";

class BugService {
  // Get bugs
  static getBugs() {
    return new Promise(async (res, rej) => {
      try {
        const result = await axios.get(url);
        const data = result.data;
        res(
          data.map((bug: any) => ({
            ...bug,
            createdAt: new Date(bug.createdAt),
          }))
        );
      } catch (err) {
        rej(err);
      }
    });
  }

  // Create bug
  static addBug(text: any) {
    return axios.post(url, { text });
  }

  // Delete bug
  static deleteBug(id: String) {
    return axios.delete(`${url}${id}`);
  }
}
export default BugService;
