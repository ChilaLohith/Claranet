<script setup>
import About from './Main/About.vue';
import Home from './Main/Home.vue';
import Products from './Main/Products.vue';

</script>

<script>
export default {
    data: function() {
        return {
            tabs: {
              isHomeShow: true,
              isAboutShow: false,
              isProductsShow: false
            },
            Class: {
              isHomeShow: 'active',
              isAboutShow: 'inActive',
              isProductsShow: 'inActive'
            }
        };
    },
    methods: {
      tabShow(s) {
        for (let tab in this.tabs) {
          if (tab == s) {
            this.tabs[tab] = true;
            this.Class[tab] = 'active';
          }
          else {
            this.tabs[tab] = false
            this.Class[tab] = 'inActive'
          }
        }
        return this.tabs
      }
    }
};
</script>

<template>
<div class="main">
  <div>
    <ul>
      <li><a href="#" @click="tabShow('isHomeShow')" v-bind:class="Class['isHomeShow']">Home</a></li>
      <li><a href="#" @click="tabShow('isAboutShow')" v-bind:class="Class['isAboutShow']">About</a></li>
      <li><a href="#" @click="tabShow('isProductsShow')" v-bind:class="Class['isProductsShow']">Products</a></li>
    </ul>
    <div class="tab-body">
      <div v-show="tabs['isHomeShow']">
        <Home />
      </div>
      <div v-show="tabs['isAboutShow']">
        <About />
      </div>
      <div v-show="tabs['isProductsShow']">
        <Products />
      </div>
    </div>
  </div>
  
</div>
</template>

<style>
@import './../assets/base.css';

@import './../assets/css/Main.css';

</style>
