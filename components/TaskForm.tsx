import { Button, DatePicker, Form, Input, Select } from "antd"
import React from "react"

const TaskForm = () => {
    const [form] = Form.useForm()

    const handleChange = (value: { value: string; label: React.ReactNode }) => {
        console.log(value)
    }

    const handleSubmit = () => {}

    return (
        <Form
            form={form}
            layout="vertical"
            labelCol={{ span: 4 }}
            style={{ maxWidth: 600, width: "100%" }}
        >
            <Form.Item label="Task Title">
                <Input placeholder="type your task here..." />
            </Form.Item>
            <Form.Item label="Priority">
                <Select
                    defaultValue={{ value: "low", label: "Low" }}
                    onChange={handleChange}
                    options={[
                        {
                            value: "low",
                            label: "Low"
                        },
                        {
                            value: "medium",
                            label: "Medium"
                        },
                        {
                            value: "high",
                            label: "High"
                        }
                    ]}
                />
            </Form.Item>
            <Form.Item label="Due Date">
                <DatePicker />
            </Form.Item>
            <Form.Item>
                <Button onClick={handleSubmit} type="primary">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default TaskForm
