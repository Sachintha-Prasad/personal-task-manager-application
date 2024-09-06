import {
    Button,
    Popconfirm,
    Select,
    SelectProps,
    Table,
    Typography
} from "antd"
import React, { useEffect, useState } from "react"
import { Task } from "@/types/task"
import { DeleteOutlined, QuestionCircleOutlined } from "@ant-design/icons"
import { dateFormat } from "@/util/dateFormat"
import PriorityLabel from "./PriorityLabel"
import TaskLabel from "./TaskLabel"

const { Column } = Table
const { Text } = Typography

type priorityProps = { value: string; label: React.ReactNode }

const TaskList = () => {
    const priorityOptions: SelectProps["options"] = [
        {
            label: <PriorityLabel type={"low"} />,
            value: "low"
        },
        {
            label: <PriorityLabel type={"medium"} />,
            value: "medium"
        },
        {
            label: <PriorityLabel type={"high"} />,
            value: "high"
        }
    ]

    const [taskList, setTaskList] = useState<Task[]>([
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
            status: "completed",
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
    ])

    const handleDelete = (key: React.Key) => {
        const newData = taskList.filter((item) => item.key !== key)
        setTaskList(newData)
    }

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await fetch("api/tasks")
            const data = await response.json()

            console.log(data)
        }

        fetchTasks()
    }, [])

    return (
        <Table dataSource={taskList} bordered>
            <Column title="Task" dataIndex="task" key="task" />
            <Column
                title="Status"
                dataIndex="status"
                key="status"
                render={(status: "pending" | "completed") => (
                    <TaskLabel status={status} />
                )}
            />
            <Column
                title="Due Date"
                dataIndex="dueDate"
                key="dueDate"
                render={(dueDate: Date | null) => dateFormat(dueDate)}
            />
            <Column
                title="Priority"
                dataIndex="priority"
                key="priority"
                render={(priority: "low" | "medium" | "high") => (
                    <Select
                        defaultValue={{
                            value: priority,
                            label: <PriorityLabel type={priority} />
                        }}
                        style={{
                            width: "100%",
                            maxWidth: 140
                        }}
                        options={priorityOptions}
                    />
                )}
            />
            <Column
                title=""
                key="action"
                render={(record: Task) => (
                    <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        icon={
                            <QuestionCircleOutlined style={{ color: "red" }} />
                        }
                        okText="Yes"
                        cancelText="No"
                        onConfirm={() => handleDelete(record.key)}
                    >
                        <Button
                            danger
                            shape="default"
                            icon={<DeleteOutlined />}
                            size="small"
                        />
                    </Popconfirm>
                )}
            />
        </Table>
    )
}

export default TaskList
