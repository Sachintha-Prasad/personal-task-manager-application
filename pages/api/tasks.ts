// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Task } from "@/types/task"
import type { NextApiRequest, NextApiResponse } from "next"

let tasks: Task[] = [
    {
        key: "1",
        task: "Complete the home works",
        status: "pending",
        priority: "low",
        dueDate: new Date("2024-09-03")
    },
    {
        key: "2",
        task: "Clean the room",
        status: "pending",
        priority: "medium",
        dueDate: null
    },
    {
        key: "3",
        task: "Watch a new movie",
        status: "pending",
        priority: "low",
        dueDate: null
    }
]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Task[]>
) {
    res.status(200).json(tasks)
}
