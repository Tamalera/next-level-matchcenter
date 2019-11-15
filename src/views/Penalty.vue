<template>
  <div class="absolute">
    <div>
      <img src="../assets/fussball_tor.svg" alt="Fussball Tor" class="w-full" />
    </div>
    <div class="relative">
      <div>
        <div class="flex flex-wrap justify-content mx-16">
          <div v-for="index in 6" :key="index" class="w-1/5 mx-4 my-8">
            <img src="../assets/fussball.svg" alt="Fussball" class="mx-auto" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
