import { Button, Dropdown, Popconfirm, Space, Table, Typography } from "antd"
import React, { useState } from "react"
import { Task } from "@/types/task"
import {
    DeleteOutlined,
    DownOutlined,
    QuestionCircleOutlined
} from "@ant-design/icons"
import { taskStatus } from "@/util/taskStatus"
import { dateFormat } from "@/util/dateFormat"
import { MenuProps } from "antd"

const { Column } = Table
const { Text } = Typography

const TaskList: React.FC = () => {
    const items: MenuProps["items"] = [
        {
            key: "1",
            label: "Low"
        },
        {
            key: "2",
            label: "Medium"
        },
        {
            key: "3",
            label: "High"
        }
    ]

    const [taskList, setTaskList] = useState<Task[]>([
        {
            key: "1",
            task: "Complete the home works",
            status: "pending",
            priority: "Low",
            dueDate: new Date("2024-09-03")
        },
        {
            key: "2",
            task: "Clean the room",
            status: "completed",
            priority: "Low",
            dueDate: null
        },
        {
            key: "3",
            task: "Watch a new movie",
            status: "pending",
            priority: "Low",
            dueDate: null
        }
    ])

    const handleDelete = (key: React.Key) => {
        const newData = taskList.filter((item) => item.key !== key)
        setTaskList(newData)
    }

    return (
        <Table dataSource={taskList} bordered>
            <Column title="Task" dataIndex="task" key="task" />
            <Column
                title="Status"
                dataIndex="status"
                key="status"
                render={(status: string) => taskStatus(status)}
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
                render={() => (
                    <Dropdown menu={{ items }} trigger={["click"]}>
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                Set Priority Level
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
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
