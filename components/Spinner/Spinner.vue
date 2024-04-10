import { toRefs } from 'vue';
<template>
    <div class="flex justify-center">
        <svg :class="`animate-spin -ml-1 px-3 h-${size} w-${size}`" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12zm2 5.291A7.96 7.96 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938z"/></svg>
    </div>
</template>

<script setup lang="ts">
    interface Props {
        size? : number
    }

    const props = withDefaults(defineProps<Props>(),{
        size : 5
    })

    const { size } = toRefs(props)
</script>