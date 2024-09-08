export const dateFormat = (date: Date | null): String =>
    // the task object in the api/tasks get the date as a Date object
    // when it send to client it converts to a string
    // from the client side another time it converts to an object and make it locale date string
    date ? new Date(date).toLocaleDateString("en-US") : "No due date"
