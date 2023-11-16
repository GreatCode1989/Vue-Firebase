<template>
    <div class="profile">
<Modal v-if="modalActive" :modalMessage="modalMessage" @close-modal="closeModal"/>
    </div>
</template>

<script>
import Modal from '@/components/Modal.vue';
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>