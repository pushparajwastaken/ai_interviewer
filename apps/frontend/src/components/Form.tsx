import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";
export function Form(){
    const [github,setGithub]=useState("");
    const [linkedin,setLinkedin]=useState("");
    async function onSubmit(){
        if(github==="" || linkedin===""){
            toast("Enter valid Credentials",{ position: "top-center" })
            return;
        }
        await axios.post("${BACKEND_URL}/api/v1/interview/start",{
           github,
     linkedin
        })
    }
    return(
         <div className="h-screen w-screen flex justify-center items-center">
        <div>
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      AI Interviewer Kickstart
    </h2>
              <div className="p-2">
 <Input placeholder="LinkedIn URL" onChange={(e) => setLinkedin(e.target.value)} />
              </div>
              <div className="p-2">
        <Input placeholder="GitHub URL" onChange={(e) => setGithub(e.target.value)} />
        </div>
       <div className="flex justify-center p-4">
        <Button onClick={onSubmit}>Start Interview</Button>
        </div>
        </div>
        </div>
    )
}