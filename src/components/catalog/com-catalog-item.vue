<template>
    <div class="com-catalog-item">
        <com-popup
            v-if="isInfoP" 
            btnTitle="Add to cart"
            v-bind:popupTitle="product_data.name"
            @closeP="closeP" 
            @btnAction="addToCart"      
        >
            <img
                class="com-catalog-item__image"
                v-bind:src="require(`../../assets/images/${product_data.image}`)" 
                alt="img"
            />
            <div>
                <p class="com-catalog-item__name">{{product_data.name}}</p>
                <p class="com-catalog-item__price">Price: {{product_data.price}} $</p>
                <p class="com-catalog-item__category">Category: {{product_data.category}}</p>
                <p class="com-catalog-item__stock">Stock balance: {{product_data.stock}}</p>
            </div>
        </com-popup>
        <img 
            class="com-catalog-item__image img-box" 
            v-bind:src="require(`../../assets/images/${product_data.image}`)" 
            alt="img"
        >
        <div class="middle-box">
         
                <button class="btn middle-box__info" @click="showInfo">Show info</button>
        
        </div>
        <p class="com-catalog-item__name">{{product_data.name}}</p>
        <p class="com-catalog-item__price">{{product_data.price}} $</p>
        
        <button 
            class="com-catalog-item__button btn"
            @click="addToCart"
            >
            Add to cart
        </button>
    </div>
</template>

<script>
import ComPopup from '../popup/com-popup'

export default {
    name: "com-catalog-item",
    components: {
        ComPopup
    },
    props: {
        product_data: {
            type: Object,
            default() {
                return {}
            }
        }

    },
    data() {
        return {
            isInfoP: false
        }
    },
    computed: {},
    methods: {
        showInfo(){
            this.isInfoP = true;
        },
        closeP(){
            this.isInfoP = false;
        },
        addToCart() {
            this.$emit('addToCart',this.product_data)
        }
    }
}
</script>

<style lang="scss">
.com-catalog-item {
  flex-basis: 25%;
  padding: 16px;
  margin-bottom: 16px;
  position: relative;
  &__name{
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 600;
      color:rgb(110, 42, 99);
  }
  &__image {
    width: 200px;
  }
  &:hover {
     box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.16);
  }
  .img-box:hover {
      opacity: 0.3;
  }
  .middle-box{
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 203px;
    height: 216px;
    background: rgba(58, 56, 56, 0.83);
       display: flex;
   
    
    &:hover{
        opacity: 1;
        margin: 16px 10px 10px 26px;
     
    }
    &__info{
        margin: auto;
        background:  rgba(58, 56, 56, 0.83);
        color: #fff;
        border: 1px solid #fff;
    }
  }
}
</style>