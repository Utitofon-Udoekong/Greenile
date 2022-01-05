<script setup >
import { Swiper, SwiperSlide } from "swiper/vue"
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core"
import SVGCircle from "./SVGCircle.vue";
SwiperCore.use([Pagination, Navigation, Autoplay])
const testimonials = [
    {
        name: "Solomon Akintola",
        text: "Fortfolio has consistently ensured returns on my investment capital. Better than all the times I wasted my money on getting rich quick schemes. I am more than happy with them.",
    },
    {
        name: "Adaku Ihioma",
        text: "I am particularly impressed with the quick response of their support team. Its like having a girlfriend that manages your money, bring in more money and still have the time to make your stomach feel sweet because you are always heard and responded to.",
    },
    {
        name: "Queen Nwaze",
        text: "This is one of the few investment platforms if not the only investment platform that has consistent returns, correct capital management and great support.",
    },
    {
        name: "Fred Nwoke",
        text: "It went from doubts to unbelievably true. To say i am impressed is an understatement. I am happy I took the risk to invest with you guys, and it is a risk that was worth it. Thanks to Fortfolio for the amazing returns.",
    }
]
</script>

<template>
    <div class="px-28 my-10 p-12">
        <div class="flex justify-between">
            <span>
                <p class="text-2xl">Featured houses</p>
            </span>
            <div class>
                <NuxtLink to class="p-4 px-8 text-white bg-black-10">View All</NuxtLink>
            </div>
        </div>
        <div class="my-6 container mx-auto max-w-screen-lg">
            <Swiper
            :slides-per-view="2"
            :space-between="50"
            :pagination="{clickable: true}"
            :speed="500"
            :centered-slides="true"
            :loop="true"
            v-if="data.length"
            :autoplay="{ delay: 5000, pauseOnMouseEnter: true }"
            :navigation="{ nextEl: '.image-next', prevEl: '.image-prev' }"
            class="relative w-full max-w-screen-lg border-5 border-dark-300 rounded-2xl bg-dark-600"
        >
            <SwiperSlide
                class="w-full !h-auto relative pb-2/3"
                v-for="(testimonial, i) in testimonials"
                    :key="i"
            >
                <img :src="image" alt="" />
                <p class="text-white text-md">{{ testimonial.text }}</p>
                <p class="text-white text-lg absolute bottom-10 right-10">{{ testimonial.name }}</p>
            </SwiperSlide>

            <button
                slot="container-end"
                aria-label="slider-left"
                class="image-prev absolute flex rounded-full z-20 left-4 top-1/2 -mt-6 w-12 h-auto bg-opacity-50 bg-dark-900 hover:bg-opacity-100"
            >   
                <i-ic:baseline-arrow-left class="w-full h-auto"></i-ic:baseline-arrow-left>
            </button>
            <button
                slot="container-end"
                aria-label="slider-right"
                class="image-next absolute flex rounded-full z-20 right-4 top-1/2 -mt-6 w-12 h-auto bg-opacity-50 bg-dark-900 hover:bg-opacity-100"
            >
                <!-- <mdi-account class="w-full h-auto" /> -->
                <i-ic:baseline-arrow-right class="w-full h-auto"></i-ic:baseline-arrow-right>
            </button>
        </Swiper>
        <SVGCircle class="absolute w-20 h-20 sm:w-30 sm:h-30 lg:left-0 -left-10 -top-10"></SVGCircle>
        <SVGCircle class="absolute sm:w-50 sm:h-50 -right-10 -bottom-10"></SVGCircle>
        </div>
    </div>
</template>

<style>
.nav-indicator {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    color: #ffffff;
    cursor: pointer;
    position: relative;
    transform: translateY(-50%);
    background: rgba(2, 44, 71, 0.863);
}
</style>