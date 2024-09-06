import { Drawer } from "antd"
import TaskForm from "@/components/TaskForm"

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
