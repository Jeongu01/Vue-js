<script>
import FirstChild from './components/FirstChild.vue';
//provide 속성의 키를 Symbol 값으로 사용하여 데이터를 주입 
import { message, reversedMessage } from '@/keys.js';
   export default {

     components : {
              FirstChild,
            },

           provide() {
               return {
                  [message]: this.message,
                  [reversedMessage] : this.reversedMessage,
               };
           },

          data(){
            return {
               message: 'Hello FirstChild Component!',
            };
          },

          computed : {
            reversedMessage() {
              return this.message.split('').reverse().join('');
            },
          },

   }

   
</script>

<template>
  
  <FirstChild />
</template>

<style>
 

</style>
