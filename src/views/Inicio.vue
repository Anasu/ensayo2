<template>
  <div class="inicio">
    <b-card-group deck>
      <b-card v-for="(item, index) in getCharacters" 
        :key="index"
        img-top
      >
        <b-card-img
          :src="item.image"
          :alt="item.name"
        ></b-card-img>

        <b-card-title :title="item.name"></b-card-title>
        <b-card-text>Estatus: {{item.status}} </b-card-text>
        <b-card-text>Especie: {{item.species}} </b-card-text>
        <b-card-text>Género: {{item.gender}} </b-card-text>
        <b-card-footer>
          <b-button 
            @click="passChar(item.name)"
            variant="outline-primary"
          >Comentar</b-button>
        </b-card-footer>
      </b-card>
    </b-card-group>

    <b-modal id="modal-Comment" title="Comentar" hide-footer>
      <b-form-input
        v-model="nombre"
        placeholder="Ingrese su nombre"
      ></b-form-input>
      <b-form-input
        v-model="comentario"
        placeholder="Ingrese su comentario"
      ></b-form-input>
      <b-button 
        @click="$bvModal.hide('modal-comment')"
      >Cancelar</b-button>
      <b-button 
        variant="success"
        @click="addComment()"
      >Comentar</b-button>
    </b-modal>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'Inicio',
  data()
  {
    return {
      nombre: '',
      comentario: '',
      selPJ: ''
    }
  },
  computed: {
    getCharacters() 
    {
      let array = this.$store.getters.getCharacters.slice(0,4);
      return array
      // return this.$store.getters.getCharacters
    }
  },
  methods: {
    ...mapActions([
      'fillChar',
      'saveComment',
    ]),
    addComment()
    {
      let objeto = {
        nombre: this.nombre,
        comentario: this.comentario,
        personaje: this.selPJ,
      }

      this.saveComment(objeto);
      
      this.$router.push({ name: 'Opiniones' })
    },
    passChar(ID)
    {
      this.selPJ = ID;
      this.$bvModal.show('modal-Comment');
    }
  },
  beforeMount()
  {
    this.fillChar();
  },
}
</script>
