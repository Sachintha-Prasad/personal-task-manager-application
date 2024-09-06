export const dateFormat = (date: Date | null): String =>
    date ? new Date(date).toLocaleDateString() : "No due date"
