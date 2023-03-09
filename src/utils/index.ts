import { IQuestion } from '../contants/types';

export function convertToUSD(number: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(number);
}

export function cx(...classNames: Array<string | number | boolean | undefined | null>) {
  return classNames.filter(Boolean).join(' ');
}

export function getRandomQuestions<T>(arrays: T[][]): T[] {
  const randomIndex = Math.floor(Math.random() * arrays.length);
  return arrays[randomIndex];
}
