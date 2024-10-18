<script>
import CustomButton from './components/CustomButton.vue';
import DefaultLayout from './components/DefaultLayout.vue';
import DynamicLayout from './components/DynamicLayout.vue';

  export default {

    components : {
          CustomButton, DefaultLayout,DynamicLayout,
    },
    data(){
       return {
          dynamicName1 : 'header',
          dynamicName2 : 'main',
          dynamicName3 : 'footer',
       };
    },
  }

</script>

<template>
     <CustomButton></CustomButton>
     <DefaultLayout>
        <template v-slot:header>
          <header>
             <h1>Header 영역</h1>
          </header>
        </template>
        <template v-slot:main>
          <main>
            <h1>Main 영역</h1>
          </main>
        </template>
        <template v-slot:footer>
          <footer>
            <h1>Footer 영역</h1>
          </footer>
        </template>

     </DefaultLayout>
     <DynamicLayout>
       <template #[dynamicName1]>
        <h2>동적 슬롯 Header</h2>
       </template>
       <template #[dynamicName2]>
        <h2>동적 슬롯 Main</h2>
       </template>
       <template #[dynamicName3]>
        <h2>동적 슬롯 Footer</h2>
       </template>
     </DynamicLayout>
</template>
  
<style>
 

</style>
