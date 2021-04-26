import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { get } from 'node:http';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task-dto';
import { UpdateTaskStatusDto } from './dto/update-status-dto';
import { TasksFilterDto } from './dto/tasks-filter.dto'; 
import {TaskStatusValidationPipe} from './pipes/task-status-validation-pipe'

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService){}

    // @Get()
    // getTasks (@Query(ValidationPipe) filter: TasksFilterDto): Task [] {

    //     if(Object.keys(filter).length){
    //         return this.taskService.getTaskWithFilter(filter)
    //     }

    //     return this.taskService.getAlLTasks()
    // }

    @Get('/:id') 
    async getTaskById (@Param('id', ParseIntPipe) id: number): Promise<Task>{
        return this.taskService.getTaskById(id)
    }

    // @Delete('/:id')
    // deleteTask (@Param('íd') id: string) {
    //     this.taskService.deleteTask(id)
    // }

    // @Post()
    // @UsePipes(ValidationPipe)
    // createTask (@Body() createTaskDto: CreateTaskDto): Task{
    //     return this.taskService.createService(createTaskDto)
    // }

    // @Put('/:id/status')

    // updateTaskStatus (@Param('id') id: string, 
    //                     @Body(TaskStatusValidationPipe) 
    //                     updateTaskStatusDto: UpdateTaskStatusDto ): Task {

    //     console.log('status dto', updateTaskStatusDto);

    //     return this.taskService.updateTask(id, updateTaskStatusDto)
    // }
}
