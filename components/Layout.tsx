import { LayoutChildrenProps } from "@/types/layout"
import { FC } from "react"

const Layout: FC<LayoutChildrenProps> = ({ children }) => {
    return <div className="main-container">{children}</div>
}

export default Layout
