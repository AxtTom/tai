<template>
    <img src="../assets/svg/autorenew.svg">
</template>

<style scoped>
img {
    height: 1.5em;
    animation-name: spin;
    animation-duration: 2000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear; 
}

@keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
}
</style>