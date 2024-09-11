import http from '@/utils/https'

export function getCategoryAPI () {
  return http({
    url: 'home/category/head'
  })
}