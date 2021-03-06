import { QueryGetTaskArgs, Task, TaskStatus } from './generated/graphql'
import { DateTimeResolver } from 'graphql-scalars'

const tasks = [
  {
    id: '1',
    createdAt: '2007-12-03T10:15:30Z',
    updatedAt: '2007-12-03T10:15:30Z',
    title: 'Test Task',
    content: 'This is a test task!',
    status: TaskStatus.NotStarted,
  },
  {
    id: '2',
    createdAt: '2007-12-03T10:15:30Z',
    updatedAt: '2007-12-03T10:15:30Z',
    title: 'Test Task',
    content: 'This is a test task!',
    status: TaskStatus.NotStarted,
  },
  {
    id: '3',
    createdAt: '2007-12-03T10:15:30Z',
    updatedAt: '2007-12-03T10:15:30Z',
    title: 'Test Task',
    content: 'This is a test task!',
    status: TaskStatus.NotStarted,
  },
  {
    id: '4',
    createdAt: '2007-12-03T10:15:30Z',
    updatedAt: '2007-12-03T10:15:30Z',
    title: 'Test Task',
    content: 'This is a test task!',
    status: TaskStatus.NotStarted,
  },
]

export default {
  DateTime: DateTimeResolver,

  getTasks: (): Array<Task> => tasks,

  getTask: ({ taskId }: QueryGetTaskArgs): Task => {
    const found = tasks.find(task => task.id === taskId)

    if (!found) throw new Error(`Task with id ${taskId} not found!`)
    return found
  },
}
