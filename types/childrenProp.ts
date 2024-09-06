import { ReactElement } from "react"

export interface ChildrenProp extends React.PropsWithChildren {
    children: ReactElement
}
