<template>
  <div id="app">
    <h1>Contact List</h1>
    <contact-input v-model.trim="newContact" @add="addContact()"></contact-input>
    <contact-item v-for="(contact, i) in contacts" :key="i" :contact="contact" @remove="removeContact(i)"></contact-item>
  </div>
</template>

<script>
import ContactInput from './components/ContactInput.vue'
import ContactItem from './components/ContactItem.vue'

export default {
  name: 'app',
  components: {
    ContactInput,
    ContactItem
  },
  data () {
    return {
      newContact: '',
      contacts: []
    }
  },
  created () {
    // ここで以下のように直接追加する代わりに fetch の API をたたいて、
    // その結果を this.contacts に割り当てるとかにするとそれっぽいですよね
    this.contacts.push('cloud taro')
    this.contacts.push('cloud jiro')
    this.contacts.push('cloud saburo')
  },
  methods: {
    addContact () {
      this.contacts.push(this.newContact)
      this.newContact = ''
    },
    removeContact (i) {
      this.contacts.splice(i, 1)
    }
  }
}
</script>
