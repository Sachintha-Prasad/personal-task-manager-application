// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Task } from "@/types/task"
import type { NextApiRequest, NextApiResponse } from "next"

let tasks: Task[] = []

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        if (req.method === "POST") {
            const newTask: Task = req.body
            tasks.push(newTask)
        } else if (req.method === "GET") {
            res.status(200).json(tasks)
        }
    } catch (err) {
        res.status(500).json({ error: err })
    }
}
