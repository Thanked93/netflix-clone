export const ConcatItems = (items: any[]): string => {
  let str = "";
  for (let i = 0; i < items.length; i++) {
    str += items[i].name;
    if (i !== items.length - 1) str += ", ";
  }
  return str;
};
