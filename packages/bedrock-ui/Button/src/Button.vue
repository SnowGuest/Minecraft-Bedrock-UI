<template>
    <button class="mc-button">
        <span class="mc-button-text">
            <slot></slot>
        </span>
    </button>
</template>

<script lang="ts" setup>
export interface ButtonProps {

}
defineProps<ButtonProps>()
</script>
<style  scoped>
.mc-button {
    min-width: 350px;
    min-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #D1D3D7;
    border: 1px solid #262629;
    color: #222222;
}

.mc-button:active {
    background-color: #358429;
    color: #FFFFFF;
    transform: translateY(1px);
    border-color: #222B23;
}

.mc-button-text {
    display: flex;
    align-items: center;

    position: relative;
    min-height: 40px;
}

.mc-button-text::after {
    position: absolute;
    content: "";
    width: 50%;
    height: 2px;
    background-color: #FFFFFF;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
}

.mc-button:active .mc-button-text::after {
    opacity: 1;
}
</style>