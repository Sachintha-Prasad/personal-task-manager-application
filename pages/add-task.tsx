import Layout from "@/components/Layout"
import { InfoCircleOutlined } from "@ant-design/icons"
import {
    Button,
    DatePicker,
    Flex,
    Form,
    Input,
    Radio,
    Select,
    Space,
    Typography
} from "antd"
import { useState } from "react"
import { redirect } from "next/navigation"
import TaskForm from "@/components/TaskForm"

const { Title } = Typography

const AddTask = () => {
    return (
        <Layout>
            <Flex vertical align="center" style={{ width: "100%" }}>
                <Title level={4}>Create a Task</Title>
                <TaskForm />
            </Flex>
        </Layout>
    )
}

export default AddTask
