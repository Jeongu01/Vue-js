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
   <form id="loginForm1">
    
    <textarea v-model="message"></textarea>
    <button type="button" @click="printData">데이터 출력</button>
   </form>
  

</template>
<style>
   
</style>