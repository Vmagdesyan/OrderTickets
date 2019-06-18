export const pluralForm = (numberOfSmth = 0, titles = []) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return `${titles[(numberOfSmth % 100 > 4 && numberOfSmth % 100 < 20)
    ? 2
    : cases[(numberOfSmth % 10 < 5)
      ? numberOfSmth % 10
      : 5]]}`;
};

export const getCurrencySymbol = (currency) => {
  switch (currency) {
    case 'EUR':
      return '€';
    case 'USD':
      return '$';
    case 'RUB':
    default:
      return '₽';
  }
};

export const MAX_STOP = 3;

export const ALL_CURRENCY = ['RUB', 'USD', 'EUR'];

export const ALL_STOP = [-1, 0, ...Array.from({ length: MAX_STOP }, (v, k) => k + 1)];
