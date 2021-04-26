import { IsIn, isNotEmpty, IsOptional, IsNotEmpty } from 'class-validator';
import { TaskStatus } from '../task-status.enum';

export class TasksFilterDto {

    @IsIn([TaskStatus.DONE, TaskStatus.IN_PROGRESS, TaskStatus.OPEN])
    @IsOptional()
    status: TaskStatus

    @IsOptional()
    @IsNotEmpty()
    search: string
}