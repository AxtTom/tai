<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="outer">
      <div id="inner">
            <div v-if="$route.path != '/'"><RouterLink to="/">Zurück</RouterLink><br><br></div>
            <RouterView />
        </div>
  </div>
</template>

<style scoped>
#outer {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
}

#inner {
    width: 600px;
    min-height: 100%;
    background-color: #00000011;
}
@media only screen and (max-width: 600px) {
    #inner {
        width: 100%;
        min-height: 100%;
        background-color: #00000011;
    }   
}
</style>