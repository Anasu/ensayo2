<template>
  <div class="footer">
    <b-container>
      <b-row align-v="center">
        <b-col class="footer_texto">
          <h3 class="footer_texto-titulo">Rick & Morty</h3>
          <p class="footer_texto-detalle">Página web creada por: Ana María Zúñiga</p>
        </b-col>
        <b-col class="footer_rrss">
          <font-awesome-icon :icon="['fab', 'twitter']" />
          <font-awesome-icon :icon="['fab', 'facebook']" />
          <a href="https://github.com/Anasu/" target="_blank">
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
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

a {
  color: white;

  &:hover {
    color: white;
  }
}
.footer {
  background-color: #17a2b8;
  color: white;

  &_rrss {
    font-size: 1.75rem;
    text-align: left;

    svg {
      margin: 0 0.5rem;
    }
  }
  
  &_texto {
    text-align: left;

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