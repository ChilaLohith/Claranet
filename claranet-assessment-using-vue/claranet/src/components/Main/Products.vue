<script setup>
import beers from './../../assets/beers.json'
</script>

<script>
export default {
    data: function() {
        return {
            myBeers: beers['data'],
            myBeerkeys: beers['data'][0],
            isShow: false,
            search_show: false,
            SearchBeers: []
        };
    },
    methods: {
        uppercase(value) {
            value = value.charAt(0).toUpperCase() + value.slice(1);
            return value.replace('_', ' ');
        },
        Search_beer() {
            this.SearchBeers = [];
            let name = document.getElementsByName("search");
            name = name[0].value.toUpperCase();
            this.search_show = true;
            this.isShow = false;
            for (let index in this.myBeers) {
                let beer = this.myBeers[index];
                if (beer['name'].toUpperCase().includes(name)) {
                    this.SearchBeers.push(beer);
                }
            }
            if (this.SearchBeers.length == 0) {
                let noResult = { "OOPS!!": "No record found..."};
                this.SearchBeers.push(noResult);
            }
        }
    }
};
</script>

<template>
    <div class="main-show">
        <div class="main-show-buttons">
            <a href="#" class="button" @Click="isShow = true, search_show=false">Click here to get the BEERS information</a>
            <input type="text" name="search" class="search-box" placeholder="Type Beer name">
            <a href="#" @click="Search_beer()" class="button">Search</a>
        </div>
        <div v-show="isShow">
            <div v-for="(item, index) in myBeers" :class="[ index%2==1 ? 'oddObject' : 'evenObject' ]" class="object">
                <div>
                    <table>
                        <tr v-for="(value, key) in item">
                            <td class="key">{{uppercase(key)}}</td>
                            <td>:</td>
                            <td>{{value}}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div v-show="search_show">
            <div v-for="(item, index) in SearchBeers" :class="[ index%2==1 ? 'oddObject' : 'evenObject' ]" class="object">
                <div>
                    <table>
                        <tr v-for="(value, key) in item">
                            <td class="key">{{uppercase(key)}}</td>
                            <td>:</td>
                            <td>{{value}}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
@import './../../assets/base.css';

@import './../../assets/css/Products.css';

</style>