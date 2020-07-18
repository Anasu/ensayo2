<template>
  <div>
    <h2>Esto es admin</h2>
    <lista></lista>
  </div>
</template>

<script>
import Lista from '../components/Lista'

export default {
  name: 'Admin',
  components: {
    Lista,
  }
}
</script>