export default `
directives: {
  directiveName: {
    bind(el, binding) {
      if (binding.modifiers.modifierName) {
        // do something with the element
      }
      if (binding.value.someAttr) {
        // do something else here
      }

      // console.log(binding) to see other attributes
    },
  },
},`;
