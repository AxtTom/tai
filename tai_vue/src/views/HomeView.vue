<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
    data() {
        return {
            msg: null
        };
    },
    mounted() {
        // axios.get("/api").then(res => {
        //     this.msg = res.data;
        // });
    }
});
</script>

<template>
    <main>
        <h1>TAI-Site</h1>
        <h2>Essensliste</h2>
        <p><RouterLink to="/list">Liste</RouterLink></p>
        <p><RouterLink to="/post">Eingabe</RouterLink></p>
        <h2>Chat</h2>
        <p><RouterLink to="/chat">Chat</RouterLink></p>
        <h2>Schuldenliste</h2>
        <p><RouterLink to="/">WIP</RouterLink></p>
        <h2>Admin</h2>
        <p><RouterLink to="/admin">Admin</RouterLink></p>
    </main>
</template>

<style scoped>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>