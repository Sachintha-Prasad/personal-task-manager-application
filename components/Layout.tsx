import { LayoutChildrenProps } from "@/types/layout"
import { EditOutlined } from "@ant-design/icons"
import { Layout as AntLayout, Button, Flex } from "antd"
import Link from "next/link"

const { Header, Content } = AntLayout

const Layout: React.FC<LayoutChildrenProps> = ({ children }) => {
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
                    <Link href="/" style={{ fontSize: 20, color: "white" }}>
                        Personal Task Manager
                    </Link>
                    <Link href="/add-task">
                        <Button type="primary">
                            Add Task <EditOutlined />
                        </Button>
                    </Link>
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
                    {children}
                </div>
            </Content>
        </AntLayout>
    )
}

export default Layout
