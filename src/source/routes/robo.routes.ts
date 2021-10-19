import express from 'express';
import controller from '../controllers/robo.controller';

const router = express.Router();

router.post('/', controller.operateRobot);

export = router;
