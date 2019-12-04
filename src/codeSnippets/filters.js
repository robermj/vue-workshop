export const filter1 = `
filters: {
  filterName(value) {
  if (!value) return ''

  // do something with the value

  return formattedValue
}`;

export const filter2 = `
Vue.filter('filterName', function (value) {
  // do something here
})`;
