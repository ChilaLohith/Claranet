<script setup>
import Welcome from './components/Welcome.vue'
import BeersTable from './components/BeersTable.vue'

</script>

<template>
  <header>
    <div class="wrapper">
      <Welcome msg="Welcome to BEERS" />
    </div>
  </header>

  <main>
    <div class="table-wrapper">
      <BeersTable />
    </div>
  </main>

</template>

<style>
@import './assets/base.css';

#app {
  margin: 0 auto;
  font-weight: normal;
}

header {
  background-color: #26302E;
  line-height: 1.5;
  position: fixed;
  padding-top: 15px;
  width: 100%;
  z-index: 1;
}

main {
  max-width: 1280px;
  position: relative;
  top: 100px;
  left: 8%;
  width: 100%;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 1);
  }
}
</style>

