import React from "react"
import { Tag, Typography } from "antd"
import { CheckCircleOutlined, ClockCircleOutlined } from "@ant-design/icons"

const { Text } = Typography

type TaskLabelProp = { status: "pending" | "completed" }

const tagStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    borderRadius: "120px",
    gap: 4
}

const TaskLabel = ({ status }: TaskLabelProp) => {
    if (status === "pending") {
        return (
            <Tag color={"blue"} icon={<ClockCircleOutlined />} style={tagStyle}>
                <Text style={{ color: "blue" }}>Pending</Text>
            </Tag>
        )
    } else if (status === "completed") {
        return (
            <Tag
                color={"green"}
                icon={<CheckCircleOutlined />}
                style={tagStyle}
            >
                <Text style={{ color: "green" }}>Completed</Text>
            </Tag>
        )
    }
}

export default TaskLabel
