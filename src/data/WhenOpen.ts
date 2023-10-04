import { IOpenAt, TDay } from '@/components/types';

export const openAt: IOpenAt = {
  fromDay: 'Poniedziałek',
  toDay: 'Piątek',
  fromHour: 8,
  toHour: 17,
};

export const days: TDay[] = [
  'Niedziela',
  'Poniedziałek',
  'Wtorek',
  'Środa',
  'Czwartek',
  'Piątek',
  'Sobota',
];

export const getDay = (day: TDay) => days.indexOf(day);
