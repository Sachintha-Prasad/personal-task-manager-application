export const dateFormat = (date: Date | null): String =>
    date ? date.toLocaleDateString() : "No due date"
