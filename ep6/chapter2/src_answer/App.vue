<template>
  <div id="app">
    <h1>Contact List</h1>
    <contact-input></contact-input>
    <contact-item v-for="(contact, i) in contacts" :key="i" :contact="contact" @remove="remove(i)"></contact-item>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ContactInput from './components/ContactInput.vue'
import ContactItem from './components/ContactItem.vue'

export default {
  name: 'app',
  components: {
    ContactInput,
    ContactItem
  },
  computed: {
    ...mapState([
      'contacts'
    ])
  },
  created () {
    this.addContact('cloud taro')
    this.addContact('cloud jiro')
    this.addContact('cloud saburo')
  },
  methods: {
    ...mapActions([
      'addContact',
      'removeContact'
    ]),
    remove (i) {
      this.removeContact(i)
    }
  }
}
</script>
