import { TaskStatus } from '../task-status.enum';
export class UpdateTaskStatusDto {
    status: TaskStatus

    setStatus (status: TaskStatus) {
        this.status = status
    }
}