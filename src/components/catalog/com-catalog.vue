<template>
    <div class="com-catalog">
       <header>
           <div class="header">
           <div class="header__left">
               <router-link v-bind:to="{name:'catalog'}"><a href="../catalog/com-catalog" class="logo"><img class="logo__img" src="../../assets/images/logo.png">BRAN<span class="other">D</span></a></router-link>
               <form class="header__form" action="#">
                   <input class="search" type="text" placeholder="Search for ltem...">
                   <button class="search__button"><img src="../../assets/images/seach.png" alt="seach"></button> 
               </form>
           </div>
           <div class="header__right">
              <img src="../../assets/images/cart.png" alt="cart">
                 <router-link v-bind:to="{name:'cart', params: {cart_data: CART}}">
                     <div class="com-catalog__link">Cart : {{CART.length}}</div>
                </router-link>
            </div>
        </div>
        </header> 
      
          <nav class="nav">
            <ul class="menu">
               <router-link v-bind:to="{name:'catalog'}"><li class="menu__list"><a href="../catalog/com-catalog" class="menu__link">Home</a></li></router-link>
                <router-link v-bind:to="{name:'catalog'}"><li class="menu__list"><a href="../catalog/com-catalog" class="menu__link">Man</a></li></router-link>
                <router-link v-bind:to="{name:'catalog'}"><li class="menu__list"><a href="../catalog/com-catalog" class="menu__link">Women</a></li></router-link>
                <router-link v-bind:to="{name:'catalog'}"><li class="menu__list"><a href="../catalog/com-catalog" class="menu__link">Kids</a></li></router-link>
                <router-link v-bind:to="{name:'catalog'}"><li class="menu__list"><a href="../catalog/com-catalog" class="menu__link">Accoseriese</a></li></router-link>
                <router-link v-bind:to="{name:'catalog'}"><li class="menu__list"><a href="../catalog/com-catalog" class="menu__link">Featured</a></li></router-link>
                <router-link v-bind:to="{name:'catalog'}"><li class="menu__list"><a href="../catalog/com-catalog" class="menu__link">Hot Deals</a></li></router-link>
            </ul>
        </nav>

        <h1 class="title">Catalog</h1>
        <div class="com-catalog__list">
            <com-catalog-item
                v-for="product in PRODUCTS"
                :key="product.article"
                v-bind:product_data="product"
                @addToCart="addToCart"
            >
            </com-catalog-item>
        </div>
    </div>
</template>

<script>
import ComCatalogItem from './com-catalog-item'
import {mapActions, mapGetters} from 'vuex'

export default {
    name: "com-catalog",
    components: {
        ComCatalogItem

    },
    props: {},
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters([
            'PRODUCTS',
            'CART'
        ]),
    },
    methods: {
        ...mapActions([
            'GET_PRODUCTS_API',
            'ADD_TO_CART'
        ]),
        addToCart(data) {
            this.ADD_TO_CART(data)
        }
    },
    mounted() {
        this.GET_PRODUCTS_API(); 
    }
}
</script>

<style lang="scss">
.com-catalog {

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  &__link {
    top: 10px;
    right: 10px;
    padding-right: 19px;
    padding-left: 19px;
    border: solid 1px #aeaeae;
    background-color:  rgb(110, 42, 99);
    color: #fff;
    letter-spacing: 0.03em;
    line-height: 32px;
    font-size: 15px;
    &:hover {
       box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.17);
  }
  }
}
</style>