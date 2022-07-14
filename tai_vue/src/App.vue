<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div v-if="$route.path != '/'"><RouterLink to="/">Zurück</RouterLink></div>
  <RouterView />
</template>