<template>
  <div>
    <h2>Opiniones de los usuarios</h2>
    <b-card 
      v-for="(item, index) in getComments" 
      :key="index"
      no-body 
      class="mb-1">
      <b-card-header 
        class="p-1" 
        role="tab"
      >
        <b-button 
          block 
          v-b-toggle="'accordion-' + item.id"
          variant="info"
        >Ver Comentario</b-button>
      </b-card-header>
      <b-collapse 
        :id="'accordion-' + item.id"
        accordion="my-accordion" 
        role="tabpanel">
        <b-card-body>
          <b-card-text>Autor: {{ item.nombre }}</b-card-text>
          <b-card-text>{{ item.comentario }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Opiniones',
  computed: {
    getComments()
    {
      return this.$store.getters.getComments
    }
  },
  methods: {
    
  }
}
</script>