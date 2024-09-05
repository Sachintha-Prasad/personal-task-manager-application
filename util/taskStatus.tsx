import React from "react"
import { Tag, Typography } from "antd"
import { CheckCircleOutlined, ClockCircleOutlined } from "@ant-design/icons"

const { Text } = Typography

// function for -> set task status
export const taskStatus = (status: string): JSX.Element => {
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
