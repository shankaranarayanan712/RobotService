import { statusType } from './interfaces/statusInterface';

export const errorMessages = {
    NO_SURVEY: 'No survey is present for this request',
    INVALID_REQUEST: 'Invalid request, Please change the request and try again',
    CANT_GET_FILE: 'Oops, Surveys are Empty, Please make sure at-least one survey is added',
    INVALID_SURVEY_ID: 'Please make sure the survey exists before answering'
};
export const status: any = [
    { code: 200, message: 'Ok' },
    { code: 201, message: 'Created' },
    { code: 404, message: 'Not found' },
    { code: 400, message: 'Bad Request' }
];
