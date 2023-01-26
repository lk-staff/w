<template>
  <main class="flex flex-col justify-center items-center min-h-screen overflow-hidden bg-slate-200">
    <slot />
  </main>
</template>

<script setup lang="ts"></script>

<style scoped>
main {
  background: url('https://static.zohocdn.com/iam/v2/components/images/bg.49756b7c711696d95133fa95451f8e13.svg')
    transparent;
  background-size: cover;
}
</style>
