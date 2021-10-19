import express from 'express';
import controller from '../controllers/robot.controller';

const router = express.Router();

router.post('/', controller.operateRobot);
router.get('/', controller.getRobotLocation);

export = router;
