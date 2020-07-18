<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/Navbar'

export default {
  data() 
  {
    return {

    }
  },
  components: {
    NavBar,
  }
}
</script>

<style lang="scss">
$cyan: blue;

</style>
