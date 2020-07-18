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
        
        <b-card-footer>
          <b-button 
            v-b-modal.modal-Comment
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
        @click="addComment"
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
      comentario: ''
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
      console.log('Commentario Agregado!')
      console.log(`el comentario es de ${this.nombre}`)
      console.log(`el comentario dice ${this.comentario}`)

      let objeto = {
        nombre: this.nombre,
        comentario: this.comentario
      }

      this.saveComment(objeto);
      
      
    }
  },
  beforeMount()
  {
    this.fillChar();
  },
}
</script>
