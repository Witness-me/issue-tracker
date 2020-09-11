// import request from "request";
import { getAccessToken, getUserId } from "./auth";

const axios = require("axios").create({
  baseURL: process.env.VUE_APP_API,
});

// Get issues
export async function getIssues(query: object) {
  console.log("query:", query);
  const result = await axios.get(
    "/home",
    { headers: { Authorization: `Bearer ${getAccessToken()}` } },
    query
  );
  const data = result.data;
  const issues = data.map((issue: any) => ({
    ...issue,
    createdAt: new Date(issue.createdAt),
    updatedAt: new Date(issue.updatedAt),
  }));
  return issues.reverse();
}

// Create issue
export async function addIssue(issue: object) {
  issue.userId = getUserId();
  return axios.post("new", issue);
}

// Delete issue
export async function deleteIssue(id: string) {
  return axios.delete(`delete/${id}`);
}

// Edit issue
export async function editIssue(issue: any) {
  return axios.put(`edit/${issue._id}`, issue);
}
