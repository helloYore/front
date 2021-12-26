//引入axios的初始化模块
import request from '@/utils/request'

//导出默认模块
export default {
  //定义模块成员
  //成员方法：获取积分等级列表
  list() {
    //调用axios的初始化模块，发送远程ajax请求
    return request({
      url: '/admin/core/integralGrade/list',
      method: 'get',
    })
  },

  removeById(id) {
    return request({
      url: '/admin/core/integralGrade/remove/' + id,
      method: 'delete',
    })
  },

  //传一个对象过来
  save(integralGrade) {
    return request({
      url: '/admin/core/integralGrade/save',
      method: 'post',
      //如果数据对象是json类型的，就要用data来传输
      data: integralGrade,
    })
  },

  //数据回显，也就是修改时候会出现原先的数据
  getById(id) {
    return request({
      url: '/admin/core/integralGrade/get/' + id,
      method: 'get',
    })
  },

  updateById(integralGrade) {
    return request({
      url: '/admin/core/integralGrade/update',
      method: 'put',
      data: integralGrade,
    })
  },
}
