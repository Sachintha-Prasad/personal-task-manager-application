import Layout from "@/components/Layout"
import { InfoCircleOutlined } from "@ant-design/icons"
import {
    Button,
    DatePicker,
    Drawer,
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

type AddTaskProps = { open: boolean; click: () => void }

const AddTask = ({ open, click }: AddTaskProps) => {
    return (
        <Drawer
            title="Add a new task"
            placement="right"
            width={500}
            onClose={click}
            open={open}
        >
            <TaskForm />
        </Drawer>
    )
}

export default AddTask
