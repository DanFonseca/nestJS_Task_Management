import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v1 as uuid} from 'uuid';
import { CreateTaskDto } from './dto/create-task-dto';
import { UpdateTaskStatusDto } from './dto/update-status-dto';
import { TasksFilterDto } from './dto/tasks-filter.dto';
import { get } from 'node:http';

@Injectable()
export class TasksService {
    private tasks: Task[] = []

    getAlLTasks(): Task[] {
        return this.tasks
    }

    getTaskById (id: string): Task {
        const found =  this.tasks.find(task => task.id == id)
        
        if(!found){
            throw new NotFoundException(`Task with ID "${id}" Not Found`)
        }

        return found
    }

    deleteTask (id: string): void {
        const found = this.getTaskById(id)
        this.tasks = this.tasks.filter(task => task.id != found.id)
    }

    createService (createTaskDto: CreateTaskDto): Task {
        const {description, title} = createTaskDto

        const task: Task = {
            id: uuid(),
            description,
            title,
            status:  TaskStatus.OPEN
        }

        this.tasks.push(task)

        return task;
    }

    updateTask (id: string, updateTaskDto:UpdateTaskStatusDto): Task {
        const task = this.getTaskById(id)
        task.status = updateTaskDto.status

        return task
    }

    getTaskWithFilter (filter: TasksFilterDto): Task[] {
        const {status, search} = filter
        var tasks = this.getAlLTasks()

        if(status){
           tasks = tasks.filter(task => task.status == status)
        }

        if (search){
            tasks = tasks.filter(task =>
                task.description.includes(search) ||
                task.title.includes(search)    
                )
        }

        return tasks

    }

}
