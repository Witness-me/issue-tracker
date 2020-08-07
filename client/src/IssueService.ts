import axios from "axios";

const url = process.env.VUE_APP_API;

class IssueService {
  // Get issues
  static getIssues = async () => {
    const result = await axios.get(url);
    const data = result.data;
    return data.map((issue: any) => ({
      ...issue,
      createdAt: new Date(issue.createdAt),
    }));
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
    return axios.delete(`${url}delete/${id}`);
  }
}
export default IssueService;
