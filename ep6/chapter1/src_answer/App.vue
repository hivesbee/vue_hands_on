<template>
  <div>
    <div>{{ count }}</div>
    <button type="button" @click="increment">click</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapState([
      'count'
    ])
  },
  methods: {
    ...mapActions([
      'addCount'
    ]),
    increment () {
      this.addCount(1)
    }
  }
}
</script>

<style>
</style>
