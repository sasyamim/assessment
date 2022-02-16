export const setDateFormat = (date: string): string => {
  const format = new Date(date).toLocaleDateString();
  return format;
};
