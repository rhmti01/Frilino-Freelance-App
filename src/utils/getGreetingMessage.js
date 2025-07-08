export function getGreetingMessage(date = new Date()) {
  const hour = date.getHours();

  if (hour >= 5 && hour < 12) {
    return "صبح بخیر";
  } else if (hour >= 12 && hour < 17) {
    return "ظهر بخیر";
  } else if (hour >= 17 && hour < 20) {
    return "عصر بخیر";
  } else {
    return "شب بخیر";
  }
}