import z from "zod";

export const InterviewRequestSchema = z.object({
  linkedinUrl: z.string(),
  githubUrl: z.string(),
});