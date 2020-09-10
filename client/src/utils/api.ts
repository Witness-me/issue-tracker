// import request from "request";
import { getAccessToken } from "./auth";

const axios = require("axios").create({
  baseURL: process.env.VUE_APP_API,
});

// Get issues
export async function getIssues(query: object) {
  // const options = {
  //   method: "POST",
  //   url: "https://witness-me.eu.auth0.com/oauth/token",
  //   headers: { "content-type": "application/json" },
  //   body:
  //     '{"client_id":"Fw2ZEl7H66AvKfrwQE1E20Ldkdl0Ro1u","client_secret":"IXzG071un3hiqfJx76iwqFOFHbQpfMYxYotCGeOxB1EQ9KYC13DeNxGaThwipAjR","audience":"issue-tracker","grant_type":"client_credentials"}',
  // };

  // request(options, function(error, response, body) {
  //   if (error) throw new Error(error);

  //   console.log(body);
  // });

  const result = await axios.get(
    "/",
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
