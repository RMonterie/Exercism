export const truncateDescription = (
  str: string,
  truncLength: number
): string => {
  if (str.length <= truncLength) {
    return str;
  }
  return `${str.slice(0, truncLength)}...`;
};
