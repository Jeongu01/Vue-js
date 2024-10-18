<script>
    export default {
       data(){
          return {
           fristName: 'Yumi',
           lastName: 'Seo',
          }
       },

       computed: {
        
         fullName(){
              console.log('computed fullName');
              return `${this.lastName} ${this.fristName}`;
         },
        }
      }

</script>

<!-- mustach syntax -->
<template>
    <h1>{{fullName}} {{fullName}}</h1>

</template>
<style>
   
</style>