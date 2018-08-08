<template>
  <div>
    <h1>Contact List</h1>
    <input type="text" v-model="newContact">
    <button type="button" @click="addContact()">add contact</button>
    <ul>
      <li v-for="(contact, i) in contacts">
        <span>{{ contact }}</span><button type="button" @click="removeContact(i)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      newContact: '',
      contacts: []
    }
  },
  created () {
    this.contacts.push('cloud taro')
    this.contacts.push('cloud jiro')
    this.contacts.push('cloud saburo')
  },
  methods: {
    addContact: function() {
      this.contacts.push(this.newContact);
      this.newContact = '';
    },
    removeContact: function(i) {
      this.contacts.splice(i, 1);
    }
  }
}
</script>
