<template>
  <div class="container">
      <h1 class="mt-5">Listado de Comentarios</h1>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Índice</th>
            <th scope="col">Nombre</th>
            <th scope="col">Comentario</th>
            <th scope="col">Personaje</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in mostrarJuguetes " :key="index">
            <th>{{item.id}}</th>
            <td>{{item.nombre}}</td>
            <td>{{item.comentario}}</td>
            <td>{{item.personaje}}</td>
            <td class="botonera">
              <b-button @click="edit(item)" class="btn btn-warning boton">Editar</b-button>
              <button @click="confirmDelete(item)" type="button" class="btn btn-danger boton">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    <!-- Modal edit --> 
    <b-modal id="modal-1" hide-footer title="Editar Producto">
      <div v-if='selected != null' class="d-flex flex-column">
        <input class="my-4" v-model="edited.id">
        <input class="my-4" v-model="edited.nombre">
        <input class="my-4" v-model="edited.comentario">
        <input class="my-4" v-model="edited.personaje">
      </div>
      <div class="botonera"> 
        <b-button @click="updateDB(edited)" variant="success" class="boton">Guardar</b-button>
        <b-button @click="$bvModal.hide('modal-1')" class="boton">Cancelar</b-button>
      </div>
    </b-modal>

    <!-- Modal create --> 
    <b-modal id="modal-2" hide-footer title="Crear Producto">
      <div class="d-flex flex-column">
        <input class="my-4" v-model="edited.codigo">
        <input class="my-4" v-model="edited.nombre">
        <input class="my-4" v-model="edited.stock">
        <input class="my-4" v-model="edited.precio">
      </div>
      <div class="botonera"> 
        <b-button @click="addProductDB(edited)" variant="success" class="boton">Guardar</b-button>
        <b-button @click="$bvModal.hide('modal-2')" class="boton">Cancelar</b-button>
      </div>
    </b-modal>

    <!-- Modal eliminar --> 
    <b-modal id="modal-3" hide-footer title="Eliminar Producto">
      <h5>¿Está seguro que desea eliminar este producto?</h5>
      <div v-if='selected != null' class="d-flex flex-row">
        <p class="mx-2">{{selected.id}}</p>
        <p class="mx-2">{{selected.nombre}}</p>
        <p class="mx-2">{{selected.comentario}}</p>
        <p class="mx-2">$ {{selected.personaje}}</p>
      </div>
      <div class="botonera"> 
        <b-button @click="deleteProduct(selected)" variant="danger" class="boton">Eliminar</b-button>
        <b-button @click="$bvModal.hide('modal-3')" class="boton">Cancelar</b-button>
      </div>
    </b-modal>


  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import { db } from '../main'

export default {
    name: 'Lista',
    data() {
      return {
        selected: null,
        edited: {
          codigo: '',
          nombre: '',
          stock: 0,
          precio: 0
        },
      }
    },
    computed: { 
        ...mapGetters([
            'getCharacters',
        ])
    },
    methods: {
      editProduct(id) {
        this.$store.dispatch('passIdProduct', id);
        this.$router.push('/edit');
      },
      resetEdit(){
        this.edited.codigo = '';
        this.edited.nombre = '';
        this.edited.stock = 0;
        this.edited.precio = 0;
      },
      edit(product){
        this.resetEdit();
        this.selected = product;
        this.edited.codigo = this.selected.codigo;
        this.edited.nombre = this.selected.nombre;
        this.edited.stock = this.selected.stock;
        this.edited.precio = this.selected.precio;
        
        this.$bvModal.show('modal-1');
      },
      updateDB(object){
        db.collection('productos').doc(this.selected.idDoc)
          .update({
            codigo: object.codigo,
            nombre: object.nombre,
            stock: object.stock,
            precio: object.precio
          })
        this.$bvModal.hide('modal-1');
      },
      createProduct() {
        this.resetEdit();
        this.$bvModal.show('modal-2');
      },
      addProductDB(object) {
        this.selected = object;
        db.collection('productos').add({
          codigo: object.codigo,
          nombre: object.nombre,
          stock: object.stock,
          precio: object.precio
        })
        .then(docRef => {
          console.log('Documento escrito con ID:', docRef);
        })
        .catch(error => {
          console.error("Error adding document: ", error);
        });

        this.$bvModal.hide('modal-2');
      },
      confirmDelete(product){
        this.selected = product;
        this.$bvModal.show('modal-3');
      },
      deleteProduct(product) {
        this.selected = product;
        db.collection('productos').doc(this.selected.idDoc)
          .delete().then(()=> {
            console.log("Document successfully deleted!");
            this.$bvModal.hide('modal-3')
          }).catch(function(error) {
            console.error("Error removing document: ", error);
          });
          
      }
    }
}
</script>

<style lang="scss">
.botonera {
  display: flex;
  flex-flow: row-reverse;
  .boton {
    margin-left: 1rem;
  }
}

</style>