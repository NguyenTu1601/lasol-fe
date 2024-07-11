<template lang="pug">
div.product(class='md:px-[60px] px-6 md:pt-[100px] pt-10')
  div(class='max-w-[1200px] w-full mx-auto flex md:gap-[120px] gap-[30px] text-white md:flex-row flex-col')
    div(class='flex-1')
      div(class='md:block hidden')
        div
          img(src="@/components/pages/home/assets/home_item_5_1.png" class='w-full aspect-[0.8] object-cover' )
        div.mt-5
          img(src="@/components/pages/product/assets/product_1.png" class='w-full aspect-[0.8] object-cover' )
        div.mt-5
          img(src="@/components/pages/product/assets/product_2.png" class='w-full aspect-[0.8] object-cover' )
        div.mt-5
          img(src="@/components/pages/product/assets/product_3.png" class='w-full aspect-[0.8] object-cover' )
      div(class='md:hidden block')
        swiper(class="w-full mySwiper z-10"  @swiper="onSwiper" :slidesPerView="'auto'" centeredSlides="true" :modules="modules" :spaceBetween="10")
          swiper-slide(class='max-w-[240px]')
            img(src="@/components/pages/home/assets/home_item_5_1.png" class='max-h-[300px]  aspect-[0.8] object-cover' )
          swiper-slide(class='max-w-[240px]')
            img(src="@/components/pages/product/assets/product_1.png" class='max-h-[300px]  aspect-[0.8] object-cover' )
          swiper-slide(class='max-w-[240px]')
            img(src="@/components/pages/product/assets/product_2.png" class='max-h-[300px]  aspect-[0.8] object-cover' )
          swiper-slide(class='max-w-[240px]')
            img(src="@/components/pages/product/assets/product_3.png" class='max-h-[300px]  aspect-[0.8] object-cover' )
            //- div(class="w-fit")
            //- swiper-slide
            //-   div(class="w-fit")
            //-     img(src="@/components/pages/product/assets/product_2.png" class='max-h-[300px]  aspect-[0.8] object-cover' )
            //- swiper-slide
            //-   div(class="w-fit")
            //-     img(src="@/components/pages/product/assets/product_3.png" class='max-h-[300px]  aspect-[0.8] object-cover' )
    div(class='flex-1')
      div.uppercase(class='md:text-[24px] text-[18px]') "quần đi làm"
      div(class='text-[#8E8E8E] md:mt-4 mt-2 md:text-[18px] text-[14px]') 450000 

      div(class='md:mt-[40px] mt-4 font-bold md:text-[18px] text-[14px]') size chart
      div.p-4.mt-2(class='border border-[#FFFFFF]')
        div.flex.justify-between.cursor-pointer(class='text-[12px]' @click='()=> isShowSizeChart=!isShowSizeChart')
          div {{sizeChart[sizeSelected].size}} - {{ sizeChart[sizeSelected].status }}
          img(src='./assets/arrow-up.svg' class='w-6 h-6 shrink-0 animate-[rotate] duration-300' :class='{"-rotate-[180deg]":isShowSizeChart}')
        div(class='h-0 overflow-hidden transition-[height] duration-300' :class='{"!h-[80px]":isShowSizeChart}')
          div.flex.items-center(class='cursor-pointer text-[14px] mt-1' v-for='(item,index) in sizeChart' @click='selectSize(index)' :class='{"border-[#FFFFFF]":sizeSelected==index}')
            div.font-semibold {{item.size}} - {{item.status}}
      div(class='text-[16px] font-bold mt-8') Mô tả:
      div(class='text-[#F7FFF7] text-[16px] mt-4') Áo đi làm
      div(class='text-[#F7FFF7] text-[16px]') Phù hợp những dịp như thế nào, được thêu trên thân áo, dây rút ở bo
      div(class='text-[#F7FFF7] text-[16px]')
        span(v-for='i in 200' class='text-[#F7FFF7] break-normal')  . .

      div(class='text-[#F7FFF7] text-[16px] mt-4 font-bold') Chất liệu
      div • Body: 100% Organic Cotton
      div • Lining: 65% Rayon, 35% Cellulose 3% Linen

      div(class='text-[#F7FFF7] text-[16px] mt-4 font-bold flex justify-between items-center cursor-pointer' @click='()=> isShowDescription=!isShowDescription')
        div(class='') Description
        img(src='./assets/plus.svg' class='w-6 h-5 shrink-0 animate-[rotate] duration-300' :class='{"-rotate-[45deg]":isShowDescription}')
      div(class='mt-1 h-0 overflow-hidden transition-[height] duration-300' :class='{"!h-[120px]":isShowDescription}' )
        div 13oz Japanese non-stretch denim cut in a relaxed
        div Material:
        div • Body: 100% Cotton
        div • Lining: 65% Polyester 35% Cotton 100% Cotton
        div Color: Washed blue

      div(class='text-[#F7FFF7] text-[16px] mt-3 font-bold') Notice
      ul(class='list-disc pl-5')
        li Đơn hàng sẽ được vận chuyển ...
        li Lasol sẽ gửi thông báo ...
        li Kiểm tra email của bạn ...

      
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { onMounted } from 'vue';

const modules = ref([Navigation])

const isShowDescription = ref(false)
const isShowSizeChart = ref(false)
const sizeSelected = ref(0)
const sizeChart = ref([
  { size: 'S', status: 'OUT OF STOCK' },
  { size: 'M', status: 'IN STOCK' },
  { size: 'L', status: 'IN STOCK' },
])

function selectSize(index) {
  sizeSelected.value = index
  isShowSizeChart.value = false
}
let mySwiper;
function onSwiper(swiper) {
  mySwiper = swiper
  mySwiper.slideTo(1)
}
</script>

<style scoped></style>