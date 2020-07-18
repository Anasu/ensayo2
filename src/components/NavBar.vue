<template>
  <div>
    <!-- Navbar con logo e items Opiniones, Favoritos y Admin -->
    <b-navbar toggleable="lg" type="dark" variant="info">
      <!-- Logo -->
      <b-navbar-brand href="#">
        <router-link 
          :to="{name: 'Inicio'}" 
          class="navbar_title"
        >Rick & Morty</router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Items alineados a la derecha -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item right href="#">
            <router-link 
              :to="{name: 'Opiniones'}" 
              class="navbar_item-blanco"
            >Opiniones</router-link>
          </b-nav-item>
          <b-nav-item right href="#">
            <router-link 
              :to="{name: 'Favoritos'}"
              class="navbar_item-blanco"
            >Favoritos</router-link>
          </b-nav-item>
          <b-nav-item right href="#">
            <router-link 
              :to="{name: 'Admin'}"
              class="navbar_item-blanco"
            >Administración</router-link>
          </b-nav-item>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style lang="scss" scoped>
.navbar_item-blanco {
  text-decoration: none;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
    color: white;
  }
}

.navbar_title {
  text-decoration: none;
  color: white;
  font-size: 1.25rem;

  &:hover {
    font-weight: bold;
    color: white;
  }
}
</style>