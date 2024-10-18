<script>
    export default {
       data(){
                  return {
                   message: '',
                  };
       },   

        methods: {
        
          printData(){
             console.log(`id: ${this.message}`);
          },
        
        }
      }

</script>

<!-- mustach syntax -->
<template>
   <form>
      <select>
         <option>아메리카노</option>
         <option>카페라떼</option>
         <option>바닐라라떼</option>
      </select>
      <button type="button">어떤 커피를 선택할까요?선택후 콘솔창에 선택한 커피이름 출력</button>
   </form>
  

</template>
<style>
   
</style>