import { MenuProps } from "antd"

export interface Task {
    key: React.Key
    task: string
    status: "pending" | "completed"
    dueDate: Date | null
    // priority: MenuProps["items"]
}
