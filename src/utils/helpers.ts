export const handleClickOutside = <T extends Element>(
  e: MouseEvent,
  callback: (bool: boolean) => void,
  ref: React.RefObject<T>
) => {
  const target = e.target as Element;
  if (ref.current && !ref.current.contains(target)) {
    callback(false);
  }
};

export const formatPrice = (price: string = '0'): string => {
  const number = price.replace(/[^0-9]+/g, '');
  const withoutDot = Number(number.split('.').join('')) / 100;

  return (Math.round(withoutDot * 100) / 100).toFixed(2);
};
export const formatQty = (qty: string): string => {
  let result: string;

  result = qty.replace(/[^0-9]+/g, '');

  if (qty.startsWith('0')) {
    result = result.replace(/^0+/, '');
  }

  return result;
};

export const formatDate = (date: Date): string => {
  return date.toUTCString().split(' ').splice(0, 3).join(' ').replace(',', '');
};
