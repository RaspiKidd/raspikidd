<template>
    <header class="bg-white">
      <nav class="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <NuxtLink to="/" class="-m-1.5 p-1.5">
            <span class="sr-only">RaspiKidd</span>
            <img class="h-8 w-auto sm:h-20" src="@/static/RaspiKidd.svg" alt="" />
          </NuxtLink>
        </div>
        <div class=" lg:flex lg:gap-x-12">
          <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm font-semibold leading-6 text-gray-900">{{ item.name }}</a>
        </div>
        <div class="flex flex-1 items-center justify-end gap-x-6">
          <a href="https://app.simplymeet.me/raspikidd/discovery-call" target="_blank" class="rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Book a Call</a>
        </div>
      </nav>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const navigation = [
    /*{ name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' }, 
    { name: 'Contact Us', href: '/Contact' },*/
  ]
  </script>