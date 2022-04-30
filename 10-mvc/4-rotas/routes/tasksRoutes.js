import express from 'express';
import Router from 'express';
import TaskController from '../controllers/TaskController.js';

let router = express.Router();

router.get('/add', TaskController.createTask);
router.get('/', TaskController.showTasks);

export default router;