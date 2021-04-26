import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { TaskStatus } from '../task-status.enum';
import {UpdateTaskStatusDto} from '../dto/update-status-dto'
import { Injectable, NotFoundException } from '@nestjs/common';


@Injectable()
export class TaskStatusValidationPipe implements PipeTransform {

    readonly allowedStatus = [
        TaskStatus.DONE,
        TaskStatus.IN_PROGRESS,
        TaskStatus.OPEN
    ];

    transform(value: UpdateTaskStatusDto): UpdateTaskStatusDto {
        console.log('into validation', value['status']);

        if(!this.isValid(value['status'].toUpperCase())){
            throw new BadRequestException(`Status "${value['status']}" is not valid`);
        }

        return value
    }

    isValid (value: any) : boolean {
        console.log('is valid', value);

        const index = this.allowedStatus.indexOf(value)
        return index !== -1
    }

}