import { TaskStatus } from '../task.model';
export class UpdateTaskStatusDto {
    status: TaskStatus

    setStatus (status: TaskStatus) {
        this.status = status
    }
}