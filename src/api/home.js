import  httpInstance  from '@/utils/https'
export function getBannerAPI (){
  return httpInstance({
    url:'home/banner'
  })
}