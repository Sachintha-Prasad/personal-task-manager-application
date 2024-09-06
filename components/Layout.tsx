import { Layout as AntLayout, Button, Flex, Typography } from "antd"
import { ChildrenProp } from "@/types/childrenProp"
import { EditOutlined } from "@ant-design/icons"
import { useState } from "react"
import AddTask from "@/pages/add-task"

const { Header, Content } = AntLayout
const { Link } = Typography

const Layout: React.FC<ChildrenProp> = ({ children }) => {
    const [isDrawerOpen, setDrawerOpen] = useState(false)
    const handleDrawer = () => {
        setDrawerOpen((prev) => !prev)
    }

    return (
        <AntLayout style={{ backgroundColor: "white" }}>
            <Header
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    minHeight: 80,
                    padding: "24px 0"
                }}
            >
                <Flex
                    justify="space-between"
                    align="center"
                    style={{
                        padding: "0 48px",
                        margin: "0 auto",
                        width: "100%",
                        maxWidth: 1440
                    }}
                >
                    <Link
                        href="/"
                        style={{
                            fontSize: 20,
                            color: "white"
                        }}
                    >
                        Personal Task Manager
                    </Link>

                    <Button type="primary" onClick={handleDrawer}>
                        Add Task <EditOutlined />
                    </Button>
                </Flex>
            </Header>

            <Content
                style={{
                    padding: "0 48px",
                    margin: "24px auto",
                    width: "100%",
                    maxWidth: 1440
                }}
            >
                <div
                    style={{
                        background: "white",
                        minHeight: 280,
                        borderRadius: 8
                    }}
                >
                    <AddTask open={isDrawerOpen} click={handleDrawer} />
                    {children}
                </div>
            </Content>
        </AntLayout>
    )
}

export default Layout
