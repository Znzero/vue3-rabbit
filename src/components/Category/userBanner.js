import { getBannerAPI } from '@/api/home'
import { ref, onMounted } from 'vue'
export const userBanner= () => {
     // 获取banner
const bannerList = ref([])

const getBanner = async () => {
  const res = await getBannerAPI({
    distributionSite: '2'
  })
  console.log(res)
  bannerList.value = res.result
}

onMounted(() => getBanner())
return {bannerList}
}