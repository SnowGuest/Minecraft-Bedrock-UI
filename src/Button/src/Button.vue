<template>
    <button class="mc-button">
        <slot></slot>
    </button>
</template>

<script lang="ts" setup>
export interface ButtonProps {

}
defineProps<ButtonProps>()
</script>
<style  scoped>
.mc-button {}
</style>