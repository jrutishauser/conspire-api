import express from 'express';
import basicController from './controllers/basicController';
import userController from './controllers/userController';
import conspiracyController from './controllers/conspiracyController';

const routes = express();

// Basic routes
routes.get('/', basicController.get);

// User routes
routes.post('/signup', userController.post);

// Conspiracy routes
routes.post('/conspiracies', conspiracyController.post)

export default routes;