<template lang="pug">
div(class='px-[60px] pt-[100px]')
  div(class='grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap-[120px] max-w-[1200px] w-full mx-auto')
    div(v-for='i in 6' class='w-full')
      div.imgContainer.relative(class='w-full aspect-[0.8]')
        img.imgne.absolute(src="@/components/pages/home/assets/home_item_1_1.png" class='w-full z-20 aspect-[0.8] object-cover h-full overflow-hidden' )
        img.absolute(src="@/components/pages/home/assets/home_item_1_2.png" class='w-full z-10 aspect-[0.8] object-cover h-full overflow-hidden' )
      div(class='mt-[20px] text-white detail pb-[10px] cursor-pointer')
        div.text-center.uppercase(class='font-bold text-[18px]') "quần đi làm"
        div.text-center.uppercase.status.opacity-0(class='text-xs mt-1 font-light capitalize') in stock
        div.text-center.uppercase.price.opacity-0(class='text-[20px] mt-1') 640.000
</template>

<script setup lang="ts">

</script>

<style lang="stylus" scoped>
@keyframes blink {
  0% {opacity: 1;}
  50% {opacity: 0;}
  100% {opacity: 1;}
}
@keyframes drop {
  0% {
    opacity: 0;
    transform: translateY(-28px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes dropPrice {
  0% {
    opacity: 0;
    transform: translateY(-56px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.imgContainer:hover > .imgne{
  animation: blink 0.5s infinite;
}
.detail:hover .status {
   opacity: 1;
  animation: drop 1s ease-out;
}
.detail:hover .price {
   opacity: 1;
  animation: dropPrice 0.8s ease-out;
}
</style>