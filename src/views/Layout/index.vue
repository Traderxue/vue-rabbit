<script setup>
import { RouterView } from 'vue-router';
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutNav from './components/LayoutNav.vue';
import LayoutFixed from './components/LayoutFixed.vue';

//触发导航列表的action
import {useCategotyStore} from "@/stores/category.js"
import { onMounted } from 'vue';
const categoryStore = useCategotyStore() 
onMounted(()=>{
    categoryStore.getCategory()
})
</script>

<template>
    <LayoutFixed/>
    <LayoutNav/>
    <LayoutHeader/>
    <RouterView/>
    <LayoutFooter/>
</template>