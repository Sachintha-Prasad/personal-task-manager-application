import React from "react"
import { Tag, Typography } from "antd"

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
                <Typography.Text style={{ color: "green" }}>
                    Low
                </Typography.Text>
            </Tag>
        )
    } else if (type === "medium") {
        return (
            <Tag color={"gold"} style={tagStyle}>
                <Typography.Text style={{ color: "orange" }}>
                    Medium
                </Typography.Text>
            </Tag>
        )
    } else if (type === "high") {
        return (
            <Tag color={"red"} style={tagStyle}>
                <Typography.Text style={{ color: "red" }}>High</Typography.Text>
            </Tag>
        )
    }
}

export default PriorityLabel
