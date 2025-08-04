export function hideNumber(number) {
  const str = number.toString();
  return  str.slice(7) + '***' +  str.slice(0, 4);
}
