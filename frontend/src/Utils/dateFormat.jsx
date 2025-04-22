// dateFormat.jsx
import moment from 'moment';

export const dateFormat = (date) => {
    const momentDate = moment(date);
    if (!momentDate.isValid()) {
        throw new Error('Invalid date provided');
    }
    return momentDate.format('DD/MM/YYYY');
};