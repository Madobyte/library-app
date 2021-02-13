export default function capitalize(string) {
  return string.replace(/\b\w/g, l => l.toUpperCase());
}