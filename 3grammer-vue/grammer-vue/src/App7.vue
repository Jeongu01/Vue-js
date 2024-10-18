<script>
    export default {
        methods: {
          onKeyupHandler(event){
              if(event.keyCode == 13){
                alert("enter키 눌렸네");
              }
          },
         onKeyupHandler1(){
           
               console.log("enter키 눌렸네");
             
          },
        }
    }
</script>

<!-- mustach syntax -->
<template>
   <input type="text" @keyup="($event) => onKeyupHandler($event)">
   <input type="text" @keyup.enter="onKeyupHandler1"/>

</template>
<style>
   
</style>