<script>
import FirstChild from './components/FirstChild.vue';  // FirstChild 컴포넌트를 지역등록하기 위해 불러온다.

   export default {
      components : {
           FirstChild  //불러온 FirstChild 컴포넌트를 components 옵션 속성으로 지역등록 
      },
      data(){
           return {
             visible: true,    //visible 데이터를 정의하고 초깃값으로 true 셋팅
           };
      },

    beforeCreate() {
      console.log('beforeCreate');
    },
    created() {
         setTimeout(()=>{    
              this.visible = false;   //컴포넌트가 생성된 후 3초뒤에 visible데이터값을 false 할당
         },3000);

    },
    beforeMount(){
          console.log('beforeMount');
    },
    mounted(){console.log('mounted');},
    beforeUpdate(){console.log('beforeUpdate');},
    updated(){console.log('updated');},
    beforeunmount(){console.log('beforeunmount');},
    unmounted(){console.log('unmounted');},
   }
</script>

<template>
    <FirstChild v-if="visible"/>
</template>

<style>
 

</style>
