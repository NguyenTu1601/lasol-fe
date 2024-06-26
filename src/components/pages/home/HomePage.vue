<template lang="pug">
div.overflow-hidden
  img(src="./assets/home_slider_image_2.png" class='w-full' )

  div(class='md:mt-[60px] mt-[30px]')
    div(class='max-w-[1200px] max-h-[400px] flex justify-between md:px-[60px] px-[30px] m-auto')
      div(class='md:w-1/4 w-[40%]')
        div.imgContainer.relative(class='w-full aspect-[0.8]')
          img.imgne.absolute(src="./assets/home_item_1_1.png" class='w-full z-20 aspect-[0.8] object-cover h-full overflow-hidden' )
          img.absolute(src="./assets/home_item_1_2.png" class='w-full z-10 aspect-[0.8] object-cover h-full overflow-hidden' )
        div(class='mt-[20px] text-white detail pb-[10px] cursor-pointer')
          div.text-center.uppercase(class='font-bold md:text-[18px] text-xs') "quần đi làm"
          div.text-center.uppercase.status.opacity-0(class='text-xs mt-1 font-light capitalize') in stock
          div.text-center.uppercase.price.opacity-0(class='md:text-[20px] text-sm mt-1') 640.000
      div(class='md:w-1/4 w-[40%]')
        div.imgContainer.relative(class='w-full aspect-[0.8]')
          img.imgne.absolute(src="./assets/home_item_2_1.png" class='w-full z-20 aspect-[0.8] object-cover h-full overflow-hidden' )
          img.absolute(src="./assets/home_item_2_2.png" class='w-full z-10 aspect-[0.8] object-cover h-full overflow-hidden' )
        div(class='mt-[20px] text-white detail pb-[10px] cursor-pointer')
          div.text-center.uppercase(class='font-bold md:text-[18px] text-xs') "quần đi làm"
          div.text-center.uppercase.status.opacity-0(class='text-xs mt-1 font-light capitalize') in stock
          div.text-center.uppercase.price.opacity-0(class='md:text-[20px] text-sm mt-1') 640.000
      div(class='w-1/4 md:block hidden')
        div.imgContainer.relative(class='w-full aspect-[0.8]')
          img.imgne.absolute(src="./assets/home_item_3_1.png" class='w-full z-20 aspect-[0.8] object-cover h-full overflow-hidden' )
          img.absolute(src="./assets/home_item_3_2.png" class='w-full z-10 aspect-[0.8] object-cover h-full overflow-hidden' )
        div(class='mt-[20px] text-white detail pb-[10px] cursor-pointer')
          div.text-center.uppercase(class='font-bold text-[18px]') "quần đi làm"
          div.text-center.uppercase.status.opacity-0(class='text-xs mt-1 font-light capitalize') in stock
          div.text-center.uppercase.price.opacity-0(class='text-[20px] mt-1') 640.000
  div(class='md:mt-[60px] mt-[12px] collection' ref='swiper1')
    swiper( class="w-full mySwiper z-10" @swiper="onSwiper" :autoplay="{delay: 200,disableOnInteraction:false}" :loop="true" :speed="1500" :modules="modules" :allowSlideNext="true" :allowSlidePrev="true")
      swiper-slide
        .relative(class="h-full")
          img(src="./assets/collection_1_1.png" class='w-full collectionImg' )
      swiper-slide
        .relative(class="h-full")
          img(src="./assets/collection_1_2.png" class='w-full collectionImg' )

  div(class='md:mt-[120px] mt-[30px]')
    div(class='max-w-[1200px] max-h-[400px] flex justify-between md:px-[60px] px-[30px] m-auto')
      div(class='md:w-1/4 w-[40%]')
        div.imgContainer.relative(class='w-full aspect-[0.8]')
          img.imgne.absolute(src="./assets/home_item_4_1.png" class='w-full z-20 aspect-[0.8] object-cover h-full overflow-hidden' )
          img.absolute(src="./assets/home_item_4_2.png" class='w-full z-10 aspect-[0.8] object-cover h-full overflow-hidden' )
        div(class='mt-[20px] text-white detail pb-[10px] cursor-pointer')
          div.text-center.uppercase(class='font-bold md:text-[18px] text-xs') "quần đi làm"
          div.text-center.uppercase.status.opacity-0(class='text-xs mt-1 font-light capitalize') in stock
          div.text-center.uppercase.price.opacity-0(class='md:text-[20px] text-sm mt-1') 640.000
      div(class='md:w-1/4 w-[40%]')
        div.imgContainer.relative(class='w-full aspect-[0.8]')
          img.imgne.absolute(src="./assets/home_item_5_1.png" class='w-full z-20 aspect-[0.8] object-cover h-full overflow-hidden' )
          img.absolute(src="./assets/home_item_5_2.png" class='w-full z-10 aspect-[0.8] object-cover h-full overflow-hidden' )
        div(class='mt-[20px] text-white detail pb-[10px] cursor-pointer')
          div.text-center.uppercase(class='font-bold md:text-[18px] text-xs') "quần đi làm"
          div.text-center.uppercase.status.opacity-0(class='text-xs mt-1 font-light capitalize') in stock
          div.text-center.uppercase.price.opacity-0(class='md:text-[20px] text-sm mt-1') 640.000
      div(class='w-1/4 md:block hidden')
        div.imgContainer.relative(class='w-full aspect-[0.8]')
          img.imgne.absolute(src="./assets/home_item_6_1.png" class='w-full z-20 aspect-[0.8] object-cover h-full overflow-hidden' )
          img.absolute(src="./assets/home_item_6_2.png" class='w-full z-10 aspect-[0.8] object-cover h-full overflow-hidden' )
        div(class='mt-[20px] text-white detail pb-[10px] cursor-pointer')
          div.text-center.uppercase(class='font-bold text-[18px]') "quần đi làm"
          div.text-center.uppercase.status.opacity-0(class='text-xs mt-1 font-light capitalize') in stock
          div.text-center.uppercase.price.opacity-0(class='text-[20px] mt-1') 640.000
  div(class='md:mt-[60px] mt-[12px] collection' ref='swiper2')
    swiper( class="w-full mySwiper" @swiper="onSwiper2" :autoplay="{delay: 200,disableOnInteraction:false}" :loop="true" :speed="1500" :modules="modules" :allowSlideNext="true" :allowSlidePrev="true")
      swiper-slide
        .relative(class="h-full")
          img(src="./assets/collection_1_1.png" class='w-full collectionImg' )
      swiper-slide
        .relative(class="h-full")
          img(src="./assets/collection_1_2.png" class='w-full collectionImg' )
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { onMounted } from 'vue';

const modules = ref([Navigation, Autoplay])

const swiper1 = ref(null)
const swiper2 = ref(null)

let mySwiper;
function onSwiper(swiper) {
  mySwiper = swiper;
  mySwiper.autoplay.stop()
  swiper1.value.addEventListener('mouseenter', () => {
    mySwiper.autoplay.start();
  });
  swiper1.value.addEventListener('mouseleave', () => {
    mySwiper.autoplay.stop();
  });
}
let mySwiper2;
function onSwiper2(swiper) {
  mySwiper2 = swiper;
  mySwiper2.autoplay.stop()
  swiper2.value.addEventListener('mouseover', () => {
    mySwiper2.autoplay.start();

  });
  swiper2.value.addEventListener('mouseout', () => {
    mySwiper2.autoplay.stop();
  });
}

onMounted(() => {

})

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

@media screen and (max-width: 768px) {
  .detail .status {
    opacity: 1;
    animation: drop 1s ease-out;
  }
  .detail .price {
   opacity: 1;
  animation: dropPrice 0.8s ease-out;
}
}
</style>