import {
    Button,
    Dropdown,
    Popconfirm,
    Space,
    Table,
    Tag,
    Typography
} from "antd"
import React, { useState } from "react"
import { Task } from "@/types/task"
import {
    CheckCircleOutlined,
    ClockCircleOutlined,
    DeleteOutlined,
    DownOutlined,
    QuestionCircleOutlined
} from "@ant-design/icons"

const { Column } = Table
const { Text } = Typography

const TaskList: React.FC = () => {
    const [taskList, setTaskList] = useState<Task[]>([
        {
            key: "1",
            task: "Complete the home works",
            status: "pending",
            dueDate: new Date("2024-09-03")
        },
        {
            key: "2",
            task: "Clean the room",
            status: "completed",
            dueDate: null
        },
        {
            key: "3",
            task: "Watch a new movie",
            status: "pending",
            dueDate: null
        }
    ])

    const handleDelete = (key: React.Key) => {
        const newData = taskList.filter((item) => item.key !== key)
        setTaskList(newData)
    }

    // function for -> set task status
    const taskStatus = (status: string): JSX.Element => {
        switch (status) {
            case "pending":
                return (
                    <Tag
                        color={"blue"}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            maxWidth: 120,
                            gap: 4
                        }}
                    >
                        <ClockCircleOutlined />
                        <Text style={{ color: "blue" }}>Pending</Text>
                    </Tag>
                )
            case "completed":
                return (
                    <Tag
                        color={"green"}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            maxWidth: 120,
                            gap: 4
                        }}
                    >
                        <CheckCircleOutlined />
                        <Text style={{ color: "green" }}>Completed</Text>
                    </Tag>
                )
            default:
                return (
                    <Tag
                        color={"blue"}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            maxWidth: 120,
                            gap: 4
                        }}
                    >
                        <ClockCircleOutlined />
                        <Text style={{ color: "blue" }}>Pending</Text>
                    </Tag>
                )
        }
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

            <Column title="Due Date" dataIndex="dueDate" key="dueDate" />

            <Column
                title="Priority"
                dataIndex="priority"
                key="priority"
                render={() => (
                    <Dropdown menu={{}} trigger={["click"]}>
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                click
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
