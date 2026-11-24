import express from "express";
import { InterviewRequestSchema } from "./types";
import axios from "axios";

const app = express();
app.use(express.json());
app.post("/api/v1/interview/start", async (req, res) => {
  const{success,data}= InterviewRequestSchema.safeParse(req.body);
  if(!success){
    res.status(411).json({ message: "Invalid input data" });
    return;
  }
  const githubUrl = data.githubUrl.endsWith("/")?data.githubUrl.slice(0, -1):data.githubUrl;
  const linkedinUrl = data.linkedinUrl.endsWith("/")?data.linkedinUrl.slice(0, -1):data.linkedinUrl;
  const githubUsername = githubUrl.split("/").pop();
  const linkedinUsername = linkedinUrl.split("/").pop();
  const userRepoInform=await axios.get(`https://api.github.com/users/${githubUsername}/repos`);
const filteredUserRepos=userRepoInform.data.map((x:any)=>({
    description:x.description,
    name:x.name,
    fullName:x.full_name,
    stars:x.stargazers_count,
}))
}
)
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});