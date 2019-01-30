<template>
  <div>
    <span>{{ contact | capitalize }}</span>
    <button type="button" @click="removeContact()">Delete</button>
  </div>
</template>

<script>
export default {
  name: 'ContactItem',
  props: {
    contact: {
      type: String,
      required: true
    }
  },
  filters: {
    capitalize (value) {
      return value.split(' ').map((x) => x.charAt(0).toUpperCase() + x.slice(1)).join(' ')
    }
  },
  methods: {
    removeContact () {
      this.$emit('remove')
    }
  }
}
</script>

<style scoped>

</style>
