<template>
  <div>
    <input type="text" v-model="contact">
    <button type="button" @click="add()">add contact</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ContactInput',
  data () {
    return {
      contact: ''
    }
  },
  methods: {
    ...mapActions([
      'addContact'
    ]),
    add () {
      this.addContact(this.contact)

      this.contact = ''
    }
  }
}
</script>
