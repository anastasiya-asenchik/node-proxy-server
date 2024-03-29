import {format, previousFriday, previousMonday} from "date-fns";

const DATE_FORMAT = 'yyyy-MM-dd';

const getFormattedDate = () => {
    const today = new Date();
    const startDate = format(previousFriday(today), DATE_FORMAT);
    const endDate = format(previousMonday(startDate), DATE_FORMAT);
    return {startDate, endDate};
}

export default getFormattedDate;