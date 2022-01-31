<script setup >
// import { Swiper, SwiperSlide } from "swiper/vue"
// import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core"
// SwiperCore.use([Pagination, Navigation, Autoplay])
const FeaturedHouses = [
    {
        name: "Lauren Schaefer",
        description: "Quae officiis consectetur ullam illum et ea aut facere. Harum vero labore. Et quos reprehenderit eaque inventore provident officia at incidunt ut. ",
        price: "31798",
        bedrooms: "5",
        bathrooms: "3",
        sqArea: "45780.25",
        address: "389 Wyman Rue,Michaela Mill, Daneborough"
    },
    {
        name: "Mitchell Windler",
        description: "Pariatur eos laboriosam ratione cupiditate voluptatibus est. Maiores blanditiis ullam et tempore voluptate in enim beatae.",
        price: "44543",
        bedrooms: "4",
        bathrooms: "3",
        sqArea: "57506.8",
        address: "07646 Kautzer Passage,Fahey Fords, New Hubertbury"
    },
    {
        name: "Donna Kub",
        description: "Eveniet totam iure laudantium voluptatem sequi illum sapiente. Ex officiis ipsum magni deserunt. Voluptas voluptate sint voluptatem esse beatae in inventore.",
        price: "66399",
        bedrooms: "6",
        bathrooms: "5",
        sqArea: "71967.02",
        address: "73901 Olson Avenue,Moshe Knolls, North Rowlandfort"
    },
    {
        name: "Emilio Jerde",
        description: "Et perspiciatis iure et optio animi officiis libero dicta. Mollitia sed earum. Aut in voluptatibus. Eligendi ipsam pariatur ut ea illo ab quo ut. ",
        price: "110228",
        bedrooms: "8",
        bathrooms: "8",
        sqArea: "90518.65",
        address: "7682 Hobart Radial,Simonis Road, Mallieshire"
    }
]
</script>

<template>
<div class="my-6 container mx-auto grid grid-cols-3 gap-5">
    <div class="w-full !h-auto relative pb-2/3 bg-white shadow-xl hover:shadow-2xl" v-for="(featuredHouse, index) in FeaturedHouses"
        :key="index">
        <div class="h-60 mb-4">
                    <img class="h-full w-full" :src="`assets/images/home-${index + 1}.jpg`" :alt="`home-${index + 1}`">
                </div>
                <div class="px-8">
                    <p class="text-black-10 text-lg font-semibold">${{ featuredHouse.price }}</p>
                    <p class="text-gray-950 text-sm">{{ featuredHouse.address }}</p>
                </div>
                <hr class="my-4">
                <div class="px-8 pb-4 flex justify-between items-center">
                    <div>
                        <span class="text-black-10 text-lg flex items-center">
                            <i-cil:bed></i-cil:bed>
                            <p class="pl-3 font-semibold">{{featuredHouse.bedrooms}}</p>
                        </span>
                        <p class="text-xs text-gray-950">Bedroom{{featuredHouse.bedrooms > 1 ? 's': ''}}</p>
                    </div>
                    <div>
                        <span class="text-black-10 text-lg flex items-center">
                            <i-cil:toilet></i-cil:toilet>
                            <p class="pl-3 font-semibold">{{featuredHouse.bathrooms}}</p>
                        </span>
                        <p class="text-xs text-gray-950">Bathroom{{featuredHouse.bathrooms > 1 ? 's': ''}}</p>
                    </div>
                    <div>
                        <span class="text-black-10 text-lg flex items-center">
                            <i-iconoir:frame-simple></i-iconoir:frame-simple>
                            <p class="pl-3 font-semibold">{{featuredHouse.sqArea}} m<sup>2</sup></p>
                        </span>
                        <p class="text-xs text-gray-950">Living Area</p>
                    </div>
                </div>
    </div>
            <!-- <Swiper
            :slides-per-view="3"
            :space-between="30"
            :pagination="{clickable: true}"
            :speed="500"
            :centered-slides="true"
            :loop="true"
            :autoplay="{ delay: 5000, pauseOnMouseEnter: true }"
            :navigation="{ nextEl: '.image-next', prevEl: '.image-prev' }"
            class="relative w-full border-5 border-dark-300 rounded-2xl bg-dark-600"
        >
            <SwiperSlide
                class="w-full !h-auto relative pb-2/3 bg-white shadow-xl hover:shadow-2xl"
                v-for="(featuredHouse, index) in FeaturedHouses"
                    :key="index"
            >   
                <div class="h-60 mb-4">
                    <img class="h-full w-full" :src="`assets/images/home-${index + 1}.jpg`" :alt="`home-${index + 1}`">
                </div>
                <div class="px-8">
                    <p class="text-black-10 text-lg font-semibold">${{ featuredHouse.price }}</p>
                    <p class="text-gray-950 text-sm">{{ featuredHouse.address }}</p>
                </div>
                <hr class="my-4">
                <div class="px-8 pb-4 flex justify-between items-center">
                    <div>
                        <span class="text-black-10 text-lg flex items-center">
                            <i-cil:bed></i-cil:bed>
                            <p class="pl-3 font-semibold">{{featuredHouse.bedrooms}}</p>
                        </span>
                        <p class="text-xs text-gray-950">Bedroom{{featuredHouse.bedrooms > 1 ? 's': ''}}</p>
                    </div>
                    <div>
                        <span class="text-black-10 text-lg flex items-center">
                            <i-cil:toilet></i-cil:toilet>
                            <p class="pl-3 font-semibold">{{featuredHouse.bathrooms}}</p>
                        </span>
                        <p class="text-xs text-gray-950">Bathroom{{featuredHouse.bathrooms > 1 ? 's': ''}}</p>
                    </div>
                    <div>
                        <span class="text-black-10 text-lg flex items-center">
                            <i-iconoir:frame-simple></i-iconoir:frame-simple>
                            <p class="pl-3 font-semibold">{{featuredHouse.sqArea}} m<sup>2</sup></p>
                        </span>
                        <p class="text-xs text-gray-950">Living Area</p>
                    </div>
                </div>
            </SwiperSlide>

            <button
                slot="container-end"
                aria-label="slider-left"
                class="image-prev absolute transition ease-linear duration-150 flex rounded-full z-20 left-7 top-1/2 bg-gray-950 p-2 -mt-6  w-12 h-auto bg-opacity-50 bg-dark-900 hover:bg-opacity-100"
            >   
                <i-cil:arrow-left class="w-full h-auto"></i-cil:arrow-left>
            </button>
            <button
                slot="container-end"
                aria-label="slider-right"
                class="image-next absolute transition ease-linear duration-150 flex rounded-full z-20 right-7 top-1/2 bg-gray-950 p-2 -mt-6 w-12 h-auto bg-opacity-50 bg-dark-900 hover:bg-opacity-100"
            >
                <i-cil:arrow-right class="w-full h-auto"></i-cil:arrow-right>
            </button>
        </Swiper> -->
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