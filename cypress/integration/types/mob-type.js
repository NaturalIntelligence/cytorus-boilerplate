import { defineParameterType } from 'cytorus/src/Globals'

defineParameterType({
  name: 'mob',
  regexp: /(?:\+91)?[0-9]{10}/,
  transformer (s) {
    return s
  }
})