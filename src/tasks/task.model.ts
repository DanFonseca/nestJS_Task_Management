export interface Task {
    id: String,
    description: String,
    title: String,
    status: TaskStatus
}

export enum TaskStatus {
    OPEN = 'OPEN',
    IN_PROGRESS='IN_PROGRESS',
    DONE = 'DONE'
}