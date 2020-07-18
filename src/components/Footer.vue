<template>
  <div class="footer">
    <b-container>
      <b-row align-v="center">
        <b-col class="footer_rrss">
          <font-awesome-icon :icon="['fab', 'twitter']" />
          <font-awesome-icon :icon="['fab', 'facebook']" />
          <font-awesome-icon :icon="['fab', 'github']" />
        </b-col>
        <b-col class="footer_texto">
          <h3 class="footer_texto-titulo">Rick and Morty</h3>
          <p class="footer_texto-detalle"></p>
          <p class="footer_texto-detalle"></p>
          <p class="footer_texto-detalle"></p>
          <p class="footer_texto-detalle"></p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: darkred;
  color: white;

  &_rrss {
    font-size: 1.75rem;
    text-align: left;

    svg {
      margin: 0 0.5rem;
    }
  }
  
  &_texto {
    text-align: right;

    &-titulo {
      font-size: 1.25rem;
    }

    &-detalle {
      margin-bottom: 0;
      font-size: 0.75rem;
    }
  }
}

</style>