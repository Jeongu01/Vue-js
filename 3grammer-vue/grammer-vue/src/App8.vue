<script>
    export default {
       data(){
                  return {
                    number : 0,
                  };
       },   

        methods: {
         incresement(){
               this.number++;
              }
          },
         onKeyupHandler1(){
           
               console.log("enter키 눌렸네");
             
          },
        }

</script>

<!-- mustach syntax -->
<template>
   <input type="text" @keyup="($event) => onKeyupHandler($event)">
   <input type="text" @keyup.enter="onKeyupHandler1"/>
   <h1 v-once>{{number}}</h1>
   <button type="button" @click="incresement">증가</button>
</template>
<style>
   
</style>