 <script>
 import { message, reversedMessage } from '@/keys.js';
 
export default {
         inject : {

               customMessage : {
                  from: message,    //import 로 불러온 symbol값
                  default: 'default hello!',
               },

               customReversedMessage : {
                from: reversedMessage,
                default: 'default hello!',
               },


         },
    

   };

   
</script>

<template>
  
   <h1>{{customMessage}}</h1>
   <h1>{{customReversedMessage}}</h1>

</template>

<style>
 

</style>