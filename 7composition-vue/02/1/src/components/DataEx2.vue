<script setup>
import { ref } from 'vue';
  const arr1 = ref([10]);
  const arr2 = ref([10]);

  setTimeout(
    ()=>{
      arr1.value = [10, 20];
    }
  );
  setTimeout(
    ()=>{
      arr2.push(20);
    }
  );
  // 배열은 데이터가 할당된 변수의 값 자체가 변경되면 반응하지만, 배열 안 요소가 변경되면 반응하지 않는다
</script>
<template>
  <h1>arr1: {{ arr1 }}</h1>
  <h1>arr2 : {{ arr2 }}</h1>
</template>
