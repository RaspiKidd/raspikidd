<template>
    <div class="bg-white py-5 sm:py-7">
        <SimpleHeader />
        <!--<div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                <div class="flex justify-start lg:w-0 lg:flex-1">
                    <NuxtLink to="/">
                        <img class="h-8 w-auto sm:h-20" src="@/static/RaspiKidd.svg" alt="Logo">
                    </NuxtLink>
                </div>
            </div>
        </div> -->
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-4xl text-center">
                <p class="mt-2 text-4xl font-bold tracking-tight text-red-700 sm:text-5xl">
                    All RaspiKidd Products & Services in one Place
                </p>
            </div>
            <div class="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <div v-for="(tier, tierIdx) in tiers" :key="tier.id" :class="[tier.mostPopular ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8', tierIdx === 0 ? 'lg:rounded-r-none' : '', tierIdx === tiers.length - 1 ? 'lg:rounded-l-none' : '', 'flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10']">
                    <div>
                        <div class="flex items-center justify-between gap-x-4">
                            <h3 :id="tier.id" :class="[tier.mostPopular ? 'text-indigo-600' : 'text-red-700', 'text-lg font-semibold leading-8']">{{ tier.name }}</h3>
                           <!-- <p v-if="tier.mostPopular" class="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600">Most popular</p> -->
                        </div>
                        <p class="mt-4 text-sm leading-6 text-gray-600">{{ tier.description }}</p>
                        <!--<p class="mt-6 flex items-baseline gap-x-1">
                            <span class="text-4xl font-bold tracking-tight text-gray-900">{{ tier.priceMonthly }}</span>
                            <span class="text-sm font-semibold leading-6 text-gray-600">/month</span>
                        </p>-->
                        <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                            <li v-for="feature in tier.features" :key="feature" class="flex gap-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#A42530" class="h-6 w-5">
                                    <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
                                </svg>

                                {{ feature }}
                            </li>
                        </ul>
                    </div>
                    <a :href="tier.href" target="_Blank" :aria-describedby="tier.id" :class="[tier.mostPopular ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500' : 'text-red-700 ring-1 ring-inset ring-red-200 hover:ring-red-600', 'mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600']"> Visit </a>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
  
<script setup>
  
  const tiers = [
    {
      name: 'Dream Digital IT Services',
      id: 'Services',
      href: 'https://services.raspikidd.com',
      //priceMonthly: '$24',
      description: 'Providing digital IT services to small businesses.',
      features: [
        'Web Development', 
        'Laser Cutting Compatible Design', 
        'Social Media Templates', 
        'AI for content creation'
        ],
      //mostPopular: false,
    },
    {
      name: 'Education',
      id: 'education',
      href: 'https://raspikidd.com/home',
      //priceMonthly: '$32',
      description: 'Making coding fun through interactive workshops & tutorials',
      features: [
        'Tutorials',
        'Blog posts',
        'Classes & Workshops',
      ],
      //mostPopular: true,
    },
    {
      name: 'micro:mag',
      id: 'micromag',
      href: 'https://micromag.raspikidd.com',
      //priceMonthly: '$48',
      description: 'The micro:bit magazine for the community by the community',
      features: [
        'Back issues',
        'News',
        'Reviews',
        'Projects',
        'Makes',
      ],
      //mostPopular: false,
    },
  ]
  </script>