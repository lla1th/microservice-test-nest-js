import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoModel } from '../model/todo.model';
import { GetTodoResponse, PostTodoResponse } from './interface/interfaces';

@Injectable()
export class TodoService {
  private todos: TodoModel[] = [];

  getTodoById(id: number): GetTodoResponse {
    const search = this.todos.find((item) => item.id === id);

    if (!search) {
      return null;
    }

    return search;
  }

  createTodo(createTodoDto: CreateTodoDto): PostTodoResponse {
    this.todos.push(createTodoDto);
    return { id: createTodoDto.id };
  }
}
