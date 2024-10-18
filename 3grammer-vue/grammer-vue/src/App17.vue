<script>
    export default {
       data(){
          return {
           numArray: [1,2,3,4,5,6,7,8,9,10],
          }
       },

       computed: {
          evenSum() {
            return this.numArray.filter((value)=> value %2 == 1).reduce((acc,cur) => acc+cur,0);
          }
        ,
        }
      }

</script>

<!-- mustach syntax -->
<template>
    <h1>{{evenSum}}</h1>

</template>
<style>
   
</style>