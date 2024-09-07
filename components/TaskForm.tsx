import { Task } from "@/types/task"
import { dateFormat } from "@/util/dateFormat"
import { Button, DatePicker, Form, Input, message, Select } from "antd"
import React from "react"
import { v4 as taskId } from "uuid"

const TaskForm = () => {
    const [form] = Form.useForm()

    const handleSubmit = async (values: any) => {
        const taskData: Task = {
            key: taskId(),
            task: values.task,
            status: "pending",
            priority: values.priority || "low",
            dueDate: values.dueDate ? values.dueDate : null
        }

        // try {
        //     const response = await fetch("/api/tasks", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify(taskData)
        //     })

        //     if (response.ok) {
        //         message.success("Task added successfully!")
        //         form.resetFields()
        //     } else {
        //         message.error("Failed to add task")
        //     }
        // } catch (error) {
        //     message.error("An error occurred while adding the task")
        // }

        form.resetFields()
    }

    return (
        <Form
            form={form}
            layout="vertical"
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
                    defaultValue={{ value: "low", label: "Low" }}
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
                <DatePicker />
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
