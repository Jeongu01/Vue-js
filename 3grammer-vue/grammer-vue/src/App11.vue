<script>
    export default {
       data(){
                  return {
                      message: '',
                  };
       },   

        methods: {
        
          onChangeHandler($event){
             this.message = $event.target.value;
             console.log(this.message);
          },
        
        }
      }

</script>

<!-- mustach syntax -->
<template>
  
    <input type="text"  @input="onChangeHandler($event)"/>
 
  
  

</template>
<style>
   
</style>