import axios from "axios";

const url = "http://localhost:5000/api/";

class IssueService {
  // Get issues
  static getIssues = async () => {
    const result = await axios.get(url);
    const data = result.data;
    return new Promise((res, rej) => {
      try {
        res(
          data.map((issue: any) => ({
            ...issue,
            createdAt: new Date(issue.createdAt),
          }))
        );
      } catch (err) {
        rej(err);
      }
    });
  };

  // Create issue
  static addIssue(
    title: string,
    status: string,
    comments: string,
    priority: string
  ) {
    return axios.post(url, { title, comments, status, priority });
  }

  // Delete issue
  static deleteIssue(id: string) {
    return axios.delete(`${url}${id}`);
  }
}
export default IssueService;
