import { Task } from "@/types/task"
import {
    getTasksFromLocalStorage,
    saveTaskToLocalStorage
} from "@/util/localStorageFunctions"
import { Button, DatePicker, Form, Input, message, Select } from "antd"
import dayjs from "dayjs"
import React from "react"
import { v4 as taskId } from "uuid"

const TaskForm = () => {
    const [form] = Form.useForm()

    const handleSubmit = async (values: any) => {
        const newTaskData: Task = {
            key: taskId(),
            task: values.task,
            status: "pending",
            priority: values.priority ? values.priority : "low",
            dueDate: values.dueDate ? values.dueDate : null
        }

        const tasksList: Task[] = getTasksFromLocalStorage()
        saveTaskToLocalStorage([...tasksList, newTaskData])

        message.success("Task added successfully!")
        form.resetFields()
    }

    return (
        <Form
            form={form}
            layout="vertical"
            initialValues={{ priority: "low" }}
            onFinish={handleSubmit}
            style={{ maxWidth: 600, width: "100%" }}
        >
            <Form.Item
                label="Task Title"
                name="task"
                rules={[
                    { required: true, message: "Please enter a task title" }
                ]}
            >
                <Input placeholder="type your task here..." />
            </Form.Item>

            <Form.Item label="Priority" name="priority">
                <Select
                    options={[
                        { value: "low", label: "Low" },
                        { value: "medium", label: "Medium" },
                        { value: "high", label: "High" }
                    ]}
                />
            </Form.Item>

            <Form.Item
                label="Due Date"
                name="dueDate"
                rules={[
                    { required: true, message: "Please select a due date" }
                ]}
            >
                <DatePicker minDate={dayjs(dayjs(), "YYYY-MM-DD")} />
            </Form.Item>

            <Form.Item>
                <Button htmlType="submit" type="primary">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default TaskForm
