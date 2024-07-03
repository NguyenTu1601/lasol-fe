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
      div.uppercase(class='text-[30px]') "quần đi làm"
      div(class='text-[#8E8E8E] mt-4 text-[20px]') 450000 
      div(class='mt-[40px] font-bold text-[20px]') size chart

      div(class='text-[16px] font-bold mt-8') Mô tả:
      div(class='text-[#F7FFF7] text-[16px] mt-4') Áo đi làm
      div(class='text-[#F7FFF7] text-[16px]') Phù hợp những dịp như thế nào, được thêu trên thân áo, dây rút ở bo
      div(class='text-[#F7FFF7] text-[16px]')
        span(v-for='i in 400' class='text-[#F7FFF7] break-normal')  . .

      div(class='text-[#F7FFF7] text-[16px] mt-4 font-bold') Chất liệu
      div • Body: 100% Organic Cotton
      div • Lining: 65% Rayon, 35% Cellulose 3% Linen

      div(class='text-[#F7FFF7] text-[16px] mt-10 font-bold') Notice
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

let mySwiper;
function onSwiper(swiper) {
  mySwiper = swiper
  mySwiper.slideTo(1)
}
</script>

<style scoped></style>