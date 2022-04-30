import Task from '../2-models/Task.js';

export default class TaskController { 
  static createTask(req, res) {
    res.render('tasks/create')
  }
}  


