export default function() {
  return Math.round(((Date.now() - Date.parse("Nov 15 2004")) / 31709800000)).toString();
}