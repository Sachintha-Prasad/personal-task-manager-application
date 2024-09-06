// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Task } from "@/types/task"
import type { NextApiRequest, NextApiResponse } from "next"

let tasks: Task[] = []

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Task>
) {}
