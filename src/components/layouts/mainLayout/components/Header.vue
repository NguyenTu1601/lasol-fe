
<template lang="pug">
div.header.fixed(class='top-0 z-50')
  div.fixed(class='bg-black w-screen z-50 flex justify-between items-center md:py-5 py-2 relative')
    div.absolute.left-6(class='md:hidden block' @click="isShowSideBar = !isShowSideBar")
      img(src="../assets/menu.svg" class='w-6 h-6 shrink-0')
    div.w-full.flex.justify-between(class='px-[60px] items-center')
      div.text-white(class='gap-[60px] md:flex hidden flex-1')
        div.uppercase.cursor-pointer Store
        el-popover(:show-arrow='false' trigger='hover' popper-class='p-0' popper-style='padding: 0;border: none;')
          template(#reference)
            div.uppercase.cursor-pointer Collection
          div.bg-black(class='px-4 py-2 text-white')
            div.py-1.text-base.cursor-pointer Collection 1
            div.py-1.text-base.cursor-pointer Collection 2
            div.py-1.text-base.cursor-pointer Collection 3
            div.py-1.text-base.cursor-pointer Collection 4
        div.uppercase.cursor-pointer Campagin
      div.flex.justify-center(class='md:w-fit w-full flex-[2]')
        router-link(to='/')
          img(src="../assets/logo-lasol-white.png" class='md:h-[40px] h-[24px] shrink-0 cursor-pointer')
      div.text-white(class='gap-[60px] md:flex hidden flex-1 justify-end')
        div.uppercase.cursor-pointer Cart
        div.uppercase.cursor-pointer Search
el-drawer(v-model="isShowSideBar" direction='ltr' size='200px' :show-close='false' :withHeader='false' modal-class='p-0')
  template(#default class='')
    div(class='h-full bg-black px-2 py-2 text-white pt-10')
      div.uppercase.py-2.cursor-pointer Store
      div.uppercase.mt-2.py-2.cursor-pointer Collection
      div.uppercase.mt-2.py-2.cursor-pointer Campagin
      div.uppercase.mt-2.py-2.cursor-pointer Cart
      div.uppercase.mt-2.py-2.cursor-pointer Search

</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const isShowSideBar = ref(false)

const router = useRouter()


</script>

<style scoped>
:global(.el-popup-parent--hidden) {
  padding-right: 0 !important;
}

:global(.el-drawer__body) {
  padding: 0;
}

.header :global(.el-popper) {
  padding: 0;
}
</style>