<template>
  <router-view/>
</template>

<script>
import { onMounted } from 'vue'
import { auth } from './utils/firebase'

export default {
  name: 'App',
  setup() {
    onMounted(() => {
      auth.onAuthStateChanged((user) => {
        console.log(user)
      })
    }) 
  },
}
</script>


<style lang="scss">

</style>
