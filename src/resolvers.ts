const tasks = [
  {
    id: '1',
    title: 'Test Task',
    description: 'This is a test task!',
    status: 'TODO',
  },
  {
    id: '2',
    title: 'Test Task',
    description: 'This is a test task!',
    status: 'TODO',
  },
  {
    id: '3',
    title: 'Test Task',
    description: 'This is a test task!',
    status: 'TODO',
  },
  {
    id: '4',
    title: 'Test Task',
    description: 'This is a test task!',
    status: 'TODO',
  },
]

module.exports = {
  hello: () => {
    return 'Hello world!'
  },

  getTasks: () => tasks,

  getTask: ({ taskId }: any) => {
    return tasks.find(task => task.id === taskId)
  },
}
