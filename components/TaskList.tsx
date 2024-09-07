import {
    Button,
    Checkbox,
    Empty,
    Popconfirm,
    Select,
    Table,
    Typography
} from "antd"
import React, { useEffect, useState } from "react"
import { Task } from "@/types/task"
import {
    DeleteOutlined,
    PlusCircleOutlined,
    QuestionCircleOutlined
} from "@ant-design/icons"
import { dateFormat } from "@/util/dateFormat"
import PriorityLabel from "./PriorityLabel"
import TaskLabel from "./TaskLabel"

const { Column } = Table
const { Text } = Typography

const TaskList = () => {
    const [taskList, setTaskList] = useState<Task[]>([])

    const handleDelete = (key: React.Key) => {
        const updatedTasks: Task[] = taskList.filter((item) => item.key !== key)
        setTaskList(updatedTasks)
    }

    const handleTaskStatusChange = (key: React.Key, checked: boolean) => {
        const updatedTasks: Task[] = taskList.map((task) =>
            task.key === key
                ? { ...task, status: checked ? "completed" : "pending" }
                : task
        )
        setTaskList(updatedTasks)
    }

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await fetch("api/tasks")
            const data = await response.json()
            console.log(data)
            setTaskList(data)
        }

        fetchTasks()
    }, [])

    return (
        <Table
            //locale is used to show things when the table is empty
            locale={{
                emptyText: () => (
                    <Empty
                        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                        imageStyle={{ height: 60 }}
                        description={
                            <Text>
                                Currently! There are no tasks. Please add new
                                tasks.
                            </Text>
                        }
                    >
                        <Button type="dashed">
                            <PlusCircleOutlined />
                            Add Task{" "}
                        </Button>
                    </Empty>
                )
            }}
            // loading={{ delay: 3 }}
            dataSource={taskList}
            style={{ borderRadius: 24 }}
            bordered
        >
            <Column
                title=""
                width={40}
                render={(record: Task) => (
                    <Checkbox
                        checked={record.status === "completed"}
                        onChange={(e) =>
                            handleTaskStatusChange(record.key, e.target.checked)
                        }
                    />
                )}
            />

            <Column title="Task" dataIndex="task" key="task" />

            <Column
                title="Status"
                dataIndex="status"
                key="status"
                width={160}
                render={(status: "pending" | "completed") => (
                    <TaskLabel status={status} />
                )}
            />

            <Column
                title="Due Date"
                dataIndex="dueDate"
                key="dueDate"
                width={160}
                render={(dueDate: Date | null) => dateFormat(dueDate)}
            />

            <Column
                title="Priority"
                dataIndex="priority"
                key="priority"
                width={160}
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
                        options={[
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
                        ]}
                    />
                )}
            />

            <Column
                title=""
                key="action"
                width={40}
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
