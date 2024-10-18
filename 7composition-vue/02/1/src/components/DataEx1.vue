<script setup>
import { ref } from 'vue';
  const count = ref(0);
  const state = ref({
    count: 0,
  });
  console.log(count.value);
  console.log(state.value.count);
  setTimeout(
    ()=>{
      count.value++;
    }, 1000
  );
  setTimeout(
    ()=>{
      state.count++;
    }, 1000
  );
  console.log(count.value);
  console.log(state.value.count);
  // 반응성의 유지되는 범위에 주목하자
  // ref() 함수로 생성되어진 반응형 데이터는 인수 값 자체에 반응성을 부여한다.
  // 숫자나 기본 자료형 값은 변응하지만, 객체나 배열같은 참조 자료형은 
</script>
<template>
  <h1>count : {{ count }}</h1>
  <h1>state : {{ state.count }}</h1>
</template>
