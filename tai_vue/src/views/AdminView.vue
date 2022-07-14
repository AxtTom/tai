<script lang="ts">
import { defineComponent, vModelCheckbox } from 'vue';
import axios from 'axios';

export default defineComponent({
    data: (vm) => {
        return {
            vm,
            pin: '',
            inS: '',
            inT: 0,
            name: ''
        }
    },
    methods: {
        check: (vm: any, pin: string) => {
            vm.inS = '';
            if (vm.inT) clearTimeout(vm.inT);
            vm.inT = setTimeout(() => {
                if (pin != '') {
                    axios.post('/api/auth', { pin }).then(res => {
                        if (res.data?.admin) {
                            vm.inS = 'success';
                            vm.name = res.data.name
                        }
                        else {
                            vm.inS = 'error';
                        }
                    }, () => {
                        vm.inS = 'error';
                    });
                }
            }, 500);
        }
    }
});
</script>

<template>
    <input :class="inS" type="password" placeholder="Admin-Pin" v-model="pin" @input="check(vm, pin)"> {{name}}
</template>

<style scoped>
.error {
    background-color: lightcoral;
}
.success {
    background-color: lightgreen;
}
</style>