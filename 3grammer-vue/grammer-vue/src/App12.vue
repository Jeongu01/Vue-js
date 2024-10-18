<script>
    export default {
      

        methods: {
        
          onSubmitHandler(e){
             e.preventDefault();  //별도의 폼 전송 처리하겠다.
             console.log('Onsubmit Handler!');
          },
        
        }
      }

</script>

<!-- mustach syntax -->
<template>
    <form @submit="onSubmitHandler">
      <button type="submit">submit</button>

    </form>
   
 
  
  

</template>
<style>
   
</style>