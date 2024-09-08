import {
    Button,
    Checkbox,
    Empty,
    message,
    Popconfirm,
    Select,
    Table,
    Typography
} from "antd"
import React, { useEffect, useState } from "react"
import { Task } from "@/types/task"
import { DeleteOutlined, QuestionCircleOutlined } from "@ant-design/icons"
import { dateFormat } from "@/util/dateFormat"
import PriorityLabel from "./PriorityLabel"
import TaskLabel from "./TaskLabel"
import {
    getTasksFromLocalStorage,
    saveTaskToLocalStorage
} from "@/util/localStorageFunctions"

const TaskList = () => {
    const [taskList, setTaskList] = useState<Task[]>([])

    const handleTaskDelete = (key: React.Key) => {
        const updatedTasksList: Task[] = taskList.filter(
            (item) => item.key !== key
        )
        updatedTasksList.length > 0
            ? message.success("Task deleted successfully!")
            : message.info("Currently! There are no tasks.")
        setTaskList(updatedTasksList)
        saveTaskToLocalStorage(updatedTasksList)
    }

    const handleTaskStatusChange = (key: React.Key, checked: boolean) => {
        const updatedTasksList: Task[] = taskList.map((task) =>
            task.key === key
                ? { ...task, status: checked ? "completed" : "pending" }
                : task
        )
        message.success("Task status changed!")
        setTaskList(updatedTasksList)
        saveTaskToLocalStorage(updatedTasksList)
    }

    const handleTasksPriorityLevelChange = (
        key: React.Key,
        priority: "low" | "medium" | "high"
    ) => {
        const updatedTasksList: Task[] = taskList.map((task) =>
            task.key === key ? { ...task, priority: priority } : task
        )
        message.success("Task's priority changed!")
        setTaskList(updatedTasksList)
        saveTaskToLocalStorage(updatedTasksList)
    }

    useEffect(() => {
        setTaskList(getTasksFromLocalStorage())
    }, [])

    return (
        <Table
            dataSource={taskList}
            //locale is used to show things when the table is empty
            locale={{
                emptyText: () => (
                    <Empty
                        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                        imageStyle={{ height: 60 }}
                        description={
                            <Typography.Text>
                                Currently! There are no tasks. Please add new
                                tasks.
                            </Typography.Text>
                        }
                    />
                )
            }}
            bordered
        >
            <Table.Column
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
            <Table.Column title="Task" dataIndex="task" key="task" />
            <Table.Column
                title="Status"
                dataIndex="status"
                key="status"
                width={160}
                render={(status: "pending" | "completed") => (
                    <TaskLabel status={status} />
                )}
            />
            <Table.Column
                title="Due Date"
                dataIndex="dueDate"
                key="dueDate"
                width={160}
                render={(dueDate: Date | null) => dateFormat(dueDate)}
            />
            <Table.Column
                title="Priority"
                dataIndex="priority"
                key="priority"
                width={160}
                render={(priority: "low" | "medium" | "high", record: Task) => (
                    <Select
                        defaultValue={priority}
                        onChange={(priority) =>
                            handleTasksPriorityLevelChange(record.key, priority)
                        }
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
            <Table.Column
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
                        onConfirm={() => handleTaskDelete(record.key)}
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
