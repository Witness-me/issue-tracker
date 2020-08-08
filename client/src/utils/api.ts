import axios from "axios";

const url = process.env.VUE_APP_API;

export async function getIssues() {
  const result = await axios.get(url);
  const data = result.data;
  return data.map((issue: any) => ({
    ...issue,
    createdAt: new Date(issue.createdAt),
  }));
}

// Create issue
export async function addIssue(
  title: string,
  status: string,
  comments: string,
  priority: string
) {
  return axios.post(url, { title, comments, status, priority });
}

// Delete issue
export async function deleteIssue(id: string) {
  return axios.delete(`${url}delete/${id}`);
}
