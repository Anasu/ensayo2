<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view/>
    <foo-ter></foo-ter>
  </div>
</template>

<script>
import NavBar from './components/Navbar'
import FooTer from './components/Footer'

export default {
  name: 'Rick & Morty',
  data() 
  {
    return {

    }
  },
  components: {
    NavBar,
    FooTer,
  }
}
</script>

<style lang="scss">
$cyan: blue;

</style>
