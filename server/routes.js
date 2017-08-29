import express from 'express';
import basicController from './controllers/basicController';
import userController from './controllers/userController';
import conspiracyController from './controllers/conspiracyController';
import commentController from './controllers/commentController';

const routes = express();

// Basic routes
routes.get('/', basicController.get);

// User routes
routes.post('/signup', userController.post);
routes.get('/users', userController.getAll);

// Conspiracy routes
routes.post('/conspiracies', conspiracyController.post);
routes.get('/conspiracies', conspiracyController.getAll);

// Comment routes
routes.post('/comment', commentController.post);

export default routes;
//598751026330510f749776f8