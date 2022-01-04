<template>
    <div class="w-full flex h-5/6">
        <div class="w-1/12 p-3 h-full ">
            <ul class>
                <li>
                    <a href="#" class="text-gray-950 text-sm write-vertical-left">Facebook</a>
                </li>
                <li>
                    <a href="#" class="text-gray-950 text-sm write-orient-sideways">Instagram</a>
                </li>
                <li>
                    <a href="#" class="text-gray-950 text-sm write-vertical-right">Twitter</a>
                </li>
            </ul>
        </div>
        <div class="w-10/12 h-full relative">
            <div class="h-full flex">
                <div class="w-7/12 bg-gray-950 p-24 h-full">
                    <p class="text-white text-6xl pb-5">
                        Modern home.
                        <br />Your
                        <b>best</b> home.
                    </p>
                    <p class="text-white text-lg">Let's find a perfect home for you.</p>
                    <div class="mt-8">
                        <div class="trade">
                            <NuxtLink
                                to=""
                                class="p-3 px-7 bg-black-10 text-white"
                            >BUY</NuxtLink>
                            <NuxtLink to="" class="p-3 px-5 bg-white text-black-10">RENT</NuxtLink>
                        </div>
                        <div class="text-gray-600 mt-2 bg-white bg-opacity-50  flex p-8 justify-between absolute z-50 w-8/12">
                        <!-- <div class="text-gray-950  backdrop-filter backdrop-blur-md flex p-8 justify-between absolute z-50 w-8/12 before:filter before:contents before:blur-sm before:absolute before:-z-10 before:inset-0 before:w-full before:h-full before:bg-white before:bg-opacity-50 "> -->
                            <div>
                                <p class="text-black-10">Location</p>
                                <p>New York, USA</p>
                            </div>
                            <div>
                                <p class="text-black-10">House Type</p>
                                <p>Apartment</p>
                            </div>
                            <div>
                                <p class="text-black-10">Pricing</p>
                                <p>$5000 - $10000</p>
                            </div>
                            <div>
                                <span>
                                    <i>IA</i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-5/12 bg-hero-bg h-full bg-cover bg-no-repeat bg-center"></div>
            </div>
        </div>
        <div class="w-1/12 h-full"></div>
    </div>
</template>
