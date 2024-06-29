<template lang="pug">
div.products(class='md:px-[60px] px-6 md:pt-[100px] pt-10')
  div(class='grid md:grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] grid-cols-[repeat(auto-fit,minmax(9rem,1fr))] md:gap-[120px] gap-[40px] max-w-[1200px] w-full mx-auto')
    div(v-for='i in 15' class='w-full')
      div.imgContainer.relative(class='w-full aspect-[0.8]')
        img.imgne.absolute(src="@/components/pages/home/assets/home_item_4_1.png" class='w-full z-20 aspect-[0.8] object-cover h-full overflow-hidden' )
        img.absolute(src="@/components/pages/home/assets/home_item_4_2.png" class='w-full z-10 aspect-[0.8] object-cover h-full overflow-hidden' )
      div(class='mt-[20px] text-white detail pb-[10px] cursor-pointer')
        div.text-center.uppercase(class='font-bold text-[18px]') "quần đi làm"
        div.text-center.uppercase.status.opacity-0(class='text-xs mt-1 font-light capitalize') in stock
        div.text-center.uppercase.price.opacity-0(class='text-[20px] mt-1') 640.000
  div.w-full.flex.justify-center(class='mt-[60px]')
    el-pagination(
      v-model:current-page="currentPage1"
      :page-size="100"
      :size="size"
      :disabled="disabled"
      :background="background"
      :total="1000"
      layout="pager"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange")
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentPage1 = ref(1)
const size = ref('small')
const disabled = ref(false)
const background = ref(false)

function handleSizeChange() {
}
function handleCurrentChange() {
}
</script>

<style lang="stylus" scoped>

.products :global(.el-pagination) {
  color: white;
}
.products :global(.el-pager li) {
  background: #000
  color: white;
}
.products :global(.el-pager li:hover) {
  color: white;
}
.products :global(.el-pager li.active ) {
  font-weight: 700
  color: #FFFFFF
  scale: 1.2
}
.products :global(.el-pager li.btn-quicknext) {
  color: #FFFFFF
}

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