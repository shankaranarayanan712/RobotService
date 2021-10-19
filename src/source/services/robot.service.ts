const fs = require('fs');
import { errorMessages, status } from '../constants';
import { validateInput } from '../validations/robotValidations';
import { robot, log } from '../interfaces/robot.interface';
import logging from '../config/logging';
const { v4: uuidv4 } = require('uuid');

export const moveRobot = async (direction: string, step: number): Promise<string> => {
    let response: any = {};
    try {
        const isValidInput = validateInput(direction, step);

        if (isValidInput) {
            let countUp: number = 0,
                countDown: number = 0;
            let countLeft: number = 0,
                countRight: number = 0;
            let previousLeft: number = 0,
                previousRight: number = 0;
            if (direction == 'Forward') {
                countUp += Math.abs(step);
            } else if (direction == 'Backward') {
                countDown += Math.abs(step);
            } else if (direction == 'Left') {
                countLeft += Math.abs(step);
            } else if (direction == 'Right') {
                countRight += Math.abs(step);
            }
            // required final position of robot
            let xCoordinate = countRight - countLeft;
            let yCoordinate = countUp - countDown;

            let totalCoordinates: Array<robot> = [];
            if (fs.existsSync(`${__dirname}/robot.txt`)) {
                const existingRobots: Array<robot> = JSON.parse(fs.readFileSync(`${__dirname}/robot.txt`));
                if (existingRobots && existingRobots.length > 0) {
                    const latestPosition = existingRobots[existingRobots.length - 1];
                    previousLeft = latestPosition.coordinates[0];
                    previousRight = latestPosition.coordinates[1];
                    xCoordinate = xCoordinate + previousLeft;
                    yCoordinate = yCoordinate + previousRight;
                    const robotObject = { id: uuidv4(), coordinates: [xCoordinate, yCoordinate], createdAt: new Date() };
                    totalCoordinates = [...existingRobots, robotObject];
                }
            } else {
                const robotObject = { id: uuidv4(), coordinates: [xCoordinate, yCoordinate], createdAt: new Date() };
                totalCoordinates.push(robotObject);
            }
            const coordinateString = JSON.stringify(totalCoordinates);
            await fs.writeFileSync(`${__dirname}/robot.txt`, coordinateString);
            response = constructLog(direction, step, previousLeft, previousRight, xCoordinate, yCoordinate);
            response = constructResponse(200, { response });
        } else {
            let responseObject = { error: errorMessages.INVALID_REQUEST };
            response = constructResponse(400, responseObject);
        }
    } catch (err: any) {
        logging.error('moveRobot', err);
    }
    return response;
};

export const getRobotLatestLocation = async () => {
    let response = '';
    try {
        let previousLeft: number = 0,
            previousRight: number = 0;
        if (fs.existsSync(`${__dirname}/robot.txt`)) {
            const existingRobots: Array<robot> = JSON.parse(fs.readFileSync(`${__dirname}/robot.txt`));
            if (existingRobots && existingRobots.length > 0) {
                const latestPosition = existingRobots[existingRobots.length - 1];
                previousLeft = latestPosition.coordinates[0];
                previousRight = latestPosition.coordinates[1];
                response = constructResponse(200, { x: previousLeft, y: previousRight });
            }
        } else {
            response = constructResponse(200, { x: 0, y: 0 });
        }
    } catch (err: any) {
        logging.error('getRobotLocation', err);
    }
    return response;
};
const constructLog = (direction: string, step: number, previousLeft: number, previousRight: number, xCoordinate: number, yCoordinate: number): log => {
    let logBody = '';
    const responseObject: log = {
        operationTime: 'Operation Time: (' + new Date().toISOString() + ')',
        direction: 'Command Direction: (' + direction + ', Step Size ' + step + ')',
        previousPosition: 'Previous Position: (' + previousLeft + ', ' + previousRight + ')',
        currentPosition: 'Current Position: (' + xCoordinate + ', ' + yCoordinate + ')'
    };
    try {
        logging.info('Output generator', JSON.stringify(logBody), responseObject);
    } catch (err: any) {
        logging.error('constructLog', err);
    }
    return responseObject;
};

const constructResponse = (stat: number, body: object) => {
    try {
        if (!body || !stat) {
            return 'Internal Server Error';
        }
        const statusDetail = status.find((st: any) => st.code === stat);
        if (statusDetail && statusDetail.code) {
            const response = { ...statusDetail, body: body };
            return response;
        }
    } catch (err: any) {
        logging.error('constructResponse', err);
    }
};
