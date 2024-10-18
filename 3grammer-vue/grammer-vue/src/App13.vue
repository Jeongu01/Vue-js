<script>
    export default {
       data(){
          return {
            selectFruit: 'banana', price : 500,
          }
       },

        methods: {
        
          onSubmitHandler(e){
             e.preventDefault();  //별도의 폼 전송 처리하겠다.
             console.log('Onsubmit Handler!');
          },

          onChangeHandler($event){
              if(this.selectFruit === 'banana'){
                     this.price = 500;
              } 
              if(this.selectFruit === 'apple'){
                   this.price = 1000;
              }

          },
          onKeyupHandler(){
                 console.log(`key up event!`);
          },
        
        }
      }

</script>

<!-- mustach syntax -->
<template>
     <select v-model="selectFruit" @change="onChangeHandler">
       <option value="banana">바나나</option>
       <option value="apple">사과</option>
      
     </select>
   
       price : {{price}}원
 
   <hr>
   <input type="text" @keyup="onKeyupHandler">

  

</template>
<style>
   
</style>