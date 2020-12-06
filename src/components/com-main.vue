<template>
  <div class="com-main">
      <keep-alive>
         <router-view></router-view>
      </keep-alive>
  </div>
</template>

<script>

export default {
    name: 'com-main',
    props: {}, 
    data() { 
        return {
            title: 'Main wrapper'
        }
    },
    computed: {}, 
    methods: {},
    watch: {}, 
	}
</script>

<style lang="scss">
.com-main{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 900px;
    margin: 0 auto;
}
</style>
