// import axios from "axios";
// const instance = axios.create({
//   baseURL: process.env.VUE_APP_API,
// });

const axios = require("axios").create({
  baseURL: process.env.VUE_APP_API,
});

// Get issues
export async function getIssues() {
  const result = await axios.get("/all");
  const data = result.data;
  console.log("data", data);
  const issues = data.map((issue: any) => ({
    ...issue,
    createdAt: new Date(issue.createdAt),
    updatedAt: new Date(issue.updatedAt),
  }));
  return issues.reverse();
}

// Create issue
export async function addIssue(issue: object) {
  return axios.post("", issue);
}

// Delete issue
export async function deleteIssue(id: string) {
  return axios.delete(`delete/${id}`);
}

// Edit issue
export async function editIssue(issue: any) {
  return axios.put(`edit/${issue._id}`, issue);
}
