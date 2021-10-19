export const validateInput = (direction: string, step: number): boolean => {
    let res = true;
    if (directions.indexOf(direction) < 0) {
        res = false;
    }
    if (!step) {
        res = false;
    }
    return res;
};

const directions = ['Forward', 'Backward', 'Left', 'Right'];
