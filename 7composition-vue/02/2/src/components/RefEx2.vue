<script setup>
  import { ref } from 'vue';
  import RefEx2Child from './RefEx2Child.vue';

  const componentRef = ref(null);

  setTimeout(() => {
    console.log(componentRef.value.number);
  }, 2000);

</script>
<template>
  <RefEx2Child ref="componentRef" />
</template>
