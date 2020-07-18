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
            variant="info"
            @click="createModal(item.status, item.species, item.gender, item.image, item.name)"
          >Ver más</b-button>
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

    <b-modal id="modal-item" title="Personaje">
      <b-card no-body class="overflow-hidden" style="max-width: 540px;">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img :src="this.foto" :alt="this.pjName" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body :title="this.pjName">
              <b-card-text>Estado: {{ this.estado}} </b-card-text>
              <b-card-text>Género: {{ this.genero}} </b-card-text>
              <b-card-text>Especie: {{this.especie}} </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
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
      selPJ: '',
      estado: '',
      genero: '',
      especie: '',
      foto: '',
      pjName: ''
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
    },
    createModal(status, species, gender, img, pj)
    {
      this.estado = status;
      this.especie = species;
      this.genero = gender;
      this.foto = img;
      this.pjName = pj;

      this.$bvModal.show('modal-item');
    }
  },
  beforeMount()
  {
    this.fillChar();
  },
}
</script>
