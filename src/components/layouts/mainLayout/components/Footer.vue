<template lang="pug">
div(class='text-white h-[120px] flex md:justify-between justify-center xl:px-[120px] lg:px-[40px] items-center py-[20px] px-4 md:flex-row flex-col md:gap-0 gap-2')
  img(src="../assets/logo-lasol-white.png" class='w-[100px] shrink-0 md:hidden block')
  div.flex(class='md:gap-[60px] gap-[10px] uppercase md:text-base text-[12px] whitespace-nowrap')
    div Search
    div About Us 
    div(class='md:hidden block') Exchange Policy
    div(class='md:hidden block') Contact 
  div(class='md:hidden block md:text-base text-sm') Copyright 2024 La Sol. Powered by Harvan
  div(class='flex-col items-center justify-between h-full md:flex hidden')
    img(src="../assets/logo-lasol-white.png" class='w-[100px] shrink-0')
    div Copyright 2024 La Sol. Powered by Harvan
  div(class='gap-[60px] uppercase md:flex hidden')
    div Exchange Policy
    div Contact 
</template>

<script setup lang="ts">

</script>

<style scoped></style>