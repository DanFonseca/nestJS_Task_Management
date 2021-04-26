import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './task.entity';
import {TaskStatus} from './task-status.enum'
import { CreateTaskDto } from './dto/create-task-dto';
import { UpdateTaskStatusDto } from './dto/update-status-dto';
import { TasksFilterDto } from './dto/tasks-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskRepository } from './repository/task.repository';

@Injectable()
export class TasksService {
    constructor(        
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository) {
    }

    // private tasks: Task[] = []

    // getAlLTasks(): Task[] {
    //     return this.tasks
    // }

    async getTaskById (id: number): Promise<Task> {
        const found =  await this.taskRepository.findOne(id)
        
        if(!found){
            throw new NotFoundException(`Task with ID "${id}" Not Found`)
        }

        return found
    }

    // deleteTask (id: string): void {
    //     const found = this.getTaskById(id)
    //     this.tasks = this.tasks.filter(task => task.id != found.id)
    // }

    // createService (createTaskDto: CreateTaskDto): Task {
    //     const {description, title} = createTaskDto

    //     const task: Task = {
    //         id: uuid(),
    //         description,
    //         title,
    //         status:  TaskStatus.OPEN
    //     }

    //     this.tasks.push(task)

    //     return task;
    // }

    // updateTask (id: string, updateTaskDto:UpdateTaskStatusDto): Task {
    //     const task = this.getTaskById(id)
    //     task.status = updateTaskDto.status

    //     return task
    // }

    // getTaskWithFilter (filter: TasksFilterDto): Task[] {
    //     const {status, search} = filter
    //     var tasks = this.getAlLTasks()

    //     if(status){
    //        tasks = tasks.filter(task => task.status == status)
    //     }

    //     if (search){
    //         tasks = tasks.filter(task =>
    //             task.description.includes(search) ||
    //             task.title.includes(search)    
    //             )
    //     }

    //     return tasks

    // }

}
