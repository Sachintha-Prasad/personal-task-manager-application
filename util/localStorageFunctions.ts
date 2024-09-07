import { Task } from "@/types/task"

export const getTasksFromLocalStorage = (): Task[] => {
    const storedTasksList = localStorage.getItem("tasksList")
    return storedTasksList ? JSON.parse(storedTasksList) : []
}

export const saveTaskToLocalStorage = (tasksList: Task[]) => {
    localStorage.setItem("tasksList", JSON.stringify(tasksList))
}
