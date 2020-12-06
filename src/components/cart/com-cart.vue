<template>
    <div class="com-cart">
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
                <router-link v-bind:to="{name:'catalog'}">
                    <div class="com-catalog__link">Catalog</div>
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

        <h1 class="title">Cart</h1>
        <p v-if="!cart_data.length">There are no products in cart...</p>
        <com-cart-item 
            v-for="(item, index) in cart_data"
            :key="item.article"
            v-bind:cart_item_data="item"
            @deleteCart="deleteCart(index)"
            @increment="increment(index)"
            @decrement="decrement(index)"
        >
        </com-cart-item>
        <div class="com-cart__total">
      <p class="total__name">Total:</p>
      <p>{{cartCost}} $</p>
    </div>
    </div>
</template>

<script>
import ComCartItem from './com-cart-item'
import {mapActions} from 'vuex'

export default {
    name: "com-cart",
    components: {
        ComCartItem
    },
    props:{
        cart_data: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {}
    },
    computed: {
        cartCost() {
            let result = []

            if (this.cart_data.length) {
                for (let item of this.cart_data) {
                    result.push(item.price * item.quantity);
                }

                result = result.reduce(function (sum, el) {
                    return sum + el;
                })
                return result;
            } else {
                return 0
            }
        }
    },
    methods: {
        ...mapActions([
            'DELETE_CART',
            'INCREMENT_CART',
            'DECREMENT_CART'
        ]),
        increment(index) {
            this.INCREMENT_CART(index);
        },
        decrement(index) {
             this.DECREMENT_CART(index);
        },
        deleteCart(index) {
            this.DELETE_CART(index)
        }
    }
}
</script>

<style lang="scss">
.com-cart {
  margin-bottom: 100px;
  &__total {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 16px 48px;
    display: flex;
    justify-content: center;
    background: #aeaeae;
    color: #000;
    font-size: 20px;
  }

  .total__name {
    margin-right: 16px;
  }
}
</style>