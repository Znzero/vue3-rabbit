<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutCeiling from './components/LayoutCeiling.vue';
// 触发获取导航列表的action
import { useCategoryStore} from '@/stores/category'
import { onMounted } from 'vue';
import router from '@/router';

const categoryStore = useCategoryStore()
onMounted(() => categoryStore.getCategory())
</script>



<template>
  <LayoutNav />
  <LayoutCeiling />
  <LayoutHeader />
  <!-- 方案一：给router-view添加key值，给router-view组件绑定 -->
  <!-- <RouterView :key="router.fullPath"/> -->
   <RouterView />
  <LayoutFooter />
</template>