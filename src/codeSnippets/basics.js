export default `
new Vue({
  el: '#app',
  data: {
    text: 'Hello World!',
  },
  methods: {
    updateText(newText) {
      this.text = newText
    }
  },
  computed: {
    invertedText() {
      return this.text.split('').reverse().join('')
    }
  },
  watch: {

  },
})`;
