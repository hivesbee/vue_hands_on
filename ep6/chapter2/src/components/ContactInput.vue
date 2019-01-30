<template>
  <div>
    <input type="text" :value="value" @input="inputContact($event)">
    <button type="button" @click="addContact()">add contact</button>
  </div>
</template>

<script>
export default {
  name: 'ContactInput',
  props: {
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    inputContact (e) {
      this.$emit('input', e.target.value)
    },
    addContact () {
      this.$emit('update:contact', this.contact)
      this.$emit('add')
    }
  }
}
</script>
