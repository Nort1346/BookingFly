export function generateFlightId(): string {
  return `${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
}
