<template>
    <div class="com-cart-item">
        <img 
          class="com-cart-item__image" 
          v-bind:src="require(`../../assets/images/${cart_item_data.image}`)" 
          alt="img"
        >
         <div class="com-cart-item__info">
            <p>{{cart_item_data.name}}</p>
            <p>{{cart_item_data.price}} $</p>
        </div>
         <div class="com-cart-item_quantity">
             <p class="qty">Qty</p>
             <span class="quantity__btn" @click="decrement">- </span>
             {{cart_item_data.quantity}}
              <span class="quantity__btn" @click="increment"> +</span>
        </div>
         <button class="delete_modal"
            @click="deleteCart"
         
         >
         Delete
         </button>
    </div>
</template>

<script>
export default {
    name: "com-cart-item",
    props: {
        cart_item_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {}
    },
    computed: {},
    methods: {
        decrement() {
         this.$emit("decrement");
        },
        increment() {
         this.$emit("increment");
        },
        deleteCart() {
            this.$emit('deleteCart')
        }
    },
    mounted() {
        this.$set(this.cart_item_data, 'quantity', 1)
    }
}
</script>

<style lang="scss">
.com-cart-item {
  width: 90vw;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px 0 #e8e8e8;
  padding: 16px;
  margin-bottom: 16px;
  &__image {
    max-width: 150px;
  }
  .quantity__btn {
    cursor: pointer;
  }
  .delete_modal{
    padding: 8px;
    color: #000;
    background: #fff;
    border: 1px solid #922f2c;
    outline: none;
    &:hover {
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.17);
    }
    &:focus {
        color: #fff;
        background: #922f2c;
        border: 1px solid #922f2c;
        outline: none;
    }
  }
  .qty{
      margin-top: 0;
  }
}
</style>