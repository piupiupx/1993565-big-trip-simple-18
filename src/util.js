import dayjs from 'dayjs';

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};
const getRandomDate = (minDaysGap, maxDaysGap) => {
  const daysGap = getRandomInteger(minDaysGap, maxDaysGap);

  return dayjs().add(daysGap, 'day').toDate();
};
const generatetDateTime = (date) => dayjs(date).format('YYYY-MM-DThh:mm');
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];
const generateDate = (date) => dayjs(date).format('D MMMM');

const humanizeHour = (hour) => dayjs(hour).format(' HH:00');
const humanizeDate = (date) => dayjs(date).format('DD MMM');
export { getRandomInteger, getRandomDate, generatetDateTime, getRandomArrayElement, generateDate, humanizeHour, humanizeDate };
