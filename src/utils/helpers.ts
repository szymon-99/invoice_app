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

export const formatDate = (date: Date): string => {
  return date.toUTCString().split(' ').splice(0, 3).join(' ').replace(',', '');
};

export const formatID = (id: string): string => {
  return id.substr(id.length - 6, id.length).toUpperCase();
};
