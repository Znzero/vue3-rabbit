import { getTopCategoryAPI } from '@/api/category'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { onBeforeRouteUpdate } from 'vue-router' 
export const userCategory = () =>{
    const categoryData = ref({})
    const route = useRoute()
    const getCategory = async (id=route.params.id) => {
        // 如何在setup中获取路由参数 useRoute() -> route 等价于this.$route
        const res = await getTopCategoryAPI(id)
        categoryData.value = res.result
        console.log(res)
      }
      onMounted(() => getCategory())
    
    //目标:路由参数变化的时候可以把分类数据接口重新发送
    onBeforeRouteUpdate((to) =>{
      console.log('路由变化了')
      getCategory(to.params.id)
    })
    return {
        categoryData
    }
}