export function enToFaNumber(str) {
  const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

  return str.toString().replace(/\d/g, x => farsiDigits[x]);
}