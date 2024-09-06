import React from "react"
import { Tag, Typography } from "antd"

const { Text } = Typography

type PriorityLabelProp = { type: "low" | "medium" | "high" }

const tagStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderRadius: "120px",
    gap: 4,
    zIndex: "999"
}

const PriorityLabel = ({ type }: PriorityLabelProp) => {
    if (type === "low") {
        return (
            <Tag color={"green"} style={tagStyle}>
                <Text style={{ color: "green" }}>Low</Text>
            </Tag>
        )
    } else if (type === "medium") {
        return (
            <Tag color={"gold"} style={tagStyle}>
                <Text style={{ color: "orange" }}>Medium</Text>
            </Tag>
        )
    } else if (type === "high") {
        return (
            <Tag color={"red"} style={tagStyle}>
                <Text style={{ color: "red" }}>High</Text>
            </Tag>
        )
    }
}

export default PriorityLabel
