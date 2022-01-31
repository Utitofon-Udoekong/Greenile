<template>
  <header class="h-auto">
    <nav class="flex justify-between h-full p-4 px-28 items-center">
      <div class="flex items-center h-full">
        <div class="logo">
          <h1 class="text-black text-2xl">REAL.EST</h1>
        </div>
        <div class="links ml-20">
          <ul class="text-gray-950 text-sm" >
            <NuxtLink to="/" class="px-4" >HOME</NuxtLink>
            <NuxtLink to="/" class="px-4">ABOUT</NuxtLink>
            <NuxtLink to="/" class="px-4">SERVICES</NuxtLink>
            <NuxtLink to="/" class="px-4">CONTACT</NuxtLink>
            <NuxtLink to="/marketplace" class="px-4">MARKETPLACE</NuxtLink>
          </ul>
        </div>
      </div>
      <div class="auth">
        <NuxtLink to="" class="p-4 px-8 mr-3 hover:text-white  hover:bg-black-10">Log in</NuxtLink>
        <NuxtLink to="" class="p-4 px-6 bg-black-10 text-white">Sign up</NuxtLink>
      </div>
    </nav>
  </header>
</template>
