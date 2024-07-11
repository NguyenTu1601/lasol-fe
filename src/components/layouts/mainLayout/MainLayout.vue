<template lang="pug">
.min-h-screen.font-montserrat(class='!bg-black overflow-hidden')
  Header
  div.bg-black.overflow-hidden
    div(class='md:mt-[80px] mt-[40px]')
      router-view
  Footer(class='mt-[60px]')
</template>
  
<script lang="ts" setup>
import { defineProps, ref } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>


<style lang="stylus" scoped>
.font-montserrat
  font-family 'Montserrat', sans-serif
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
</style>