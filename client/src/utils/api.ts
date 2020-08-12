// import axios from "axios";
// const instance = axios.create({
//   baseURL: process.env.VUE_APP_API,
// });

const axios = require("axios").create({
  baseURL: process.env.VUE_APP_API,
});

// Get issues
export async function getIssues() {
  const result = await axios.get("");
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
  return axios.post("", { title, comments, status, priority });
}

// Delete issue
export async function deleteIssue(id: string) {
  return axios.delete(`delete/${id}`);
}
