<script setup>
import beers from './../assets/beers.json'
</script>

<script>
export default {
    data: function() {
        return {
            myBeers: beers['data'],
            myBeerkeys: beers['data'][0],
            isShow: false
        };
    },
    methods: {
    uppercase(value) {
      // return value.toUpperCase().replace('_', ' ');
      value = value.charAt(0).toUpperCase() + value.slice(1);
      return value.replace('_', ' ')
    }
  }
};
</script>

<template>
<div class="main">
  <a href="#" class="button" @Click="isShow = true">Click here to get the BEERS information</a>
    <div v-show="isShow">
      <table class="beers-table" border="1px" cellspacing="0" cellpadding="10px">
        <tr>
          <th v-for="(value,key) in myBeerkeys">{{uppercase(key)}}</th>
        </tr>
        <tr v-for="item in myBeers">
          <td v-for="value in item">{{value}}</td>
        </tr>
      </table>
    </div>
</div>
</template>

<style>
@import './../assets/base.css';

.button {
    background-color: #3393FF;
    color: #fff;
    display: inline-block;
    margin-left: 40%;
    padding: 10px;
    text-decoration: none;
    border-radius: 10px;
}

.beers-table {
  background-color: #EEF7EB;
  border: 1px solid #000;
  margin-top: 30px;
  box-shadow: 10px 10px 5px #E4E7E4;
  /* width: 100%; */
}

th {
  font-weight: 700;
}

</style>
