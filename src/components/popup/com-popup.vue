<template>
  <div class="popup" ref="popup">
    <div class="com-popup">
      <div class="com-popup__header">
        <span class="popup__h1">{{popupTitle}}</span>
        <span>
          <i class="material-icons" @click="closeP"> close </i>
        </span>
      </div>
      <div class="com-popup__content">
        <slot></slot>
      </div>
      <div class="com-popup__footer">
        <button class="close_modal" @click="closeP">Close</button>
        <button class="btn" @click="btnAction">{{btnTitle}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "com-propup",
  props: {
    popupTitle: {
      type: String,
      default: "Popup name"
    },
    btnTitle: {
      type: String,
      default: "Ok"
    }
  },
  data() {
    return {};
  },
  methods: {
    btnAction() {
      this.$emit('btnAction');
    },
    closeP() {
      this.$emit('closeP');
    },
  },
  mounted() {
    let vm = this;
    document.addEventListener('click', function (item) {
      if (item.target === vm.$refs["popup"]) {
        vm.closeP();
      }
    })
  },
}
</script>

<style lang="scss">
.popup {
  background: rgba(64, 64, 64, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 30;
  &__h1{
    font-size: 20px;
    color: rgb(110, 42, 99);
    text-transform: uppercase;
  }
}
.com-popup {
  padding: 16px;
  position: fixed;
  top: 50px;
  width: 500px;
  background: #fff;
  box-shadow: 0 0 17px 0 #e7e7e7;
  z-index: 50;
  &__header,&__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  .close_modal {
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
  .material-icons{
     cursor: pointer;
  }
}
</style>