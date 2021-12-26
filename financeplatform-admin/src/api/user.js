import request from '@/utils/request'

export function login(data) {
  return request({
    // 模拟登陆配置 ，加一个baseURL
    baseURL: '/dev-api',
    url: '/vue-admin-template/user/login',
    method: 'post',
    data,
  })
}

export function getInfo(token) {
  return request({
    // 模拟登陆配置 ，加一个baseURL
    baseURL: '/dev-api',
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token },
  })
}

export function logout() {
  return request({
    // 模拟登陆配置 ，加一个baseURL
    baseURL: '/dev-api',
    url: '/vue-admin-template/user/logout',
    method: 'post',
  })
}
