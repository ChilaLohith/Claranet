<script setup>
import Header from './components/Header.vue'
import Main from './components/Main.vue'

</script>

<template>
  <header>
    <div class="wrapper">
      <Header msg="Welcome to BEERS" />
    </div>
  </header>

  <main>
    <div class="table-wrapper">
      <Main />
    </div>
  </main>

</template>

<style>
@import './assets/base.css';

@import './assets/css/app.css'

</style>

