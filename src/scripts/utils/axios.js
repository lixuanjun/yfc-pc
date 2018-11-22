//axios,获取后台数据
//封装axios

import axios from 'axios'

export default {
  get: (param)=>{//param是传过来的一个对象
    axios({
      url: param.url,
      method: param.method,
      params:param.params
    })
    .then(function (res) {
      param.callback(res)
    })
  },
  post: (param)=>{
    axios({
      url: param.url,
      method: param.method,
      data: param.data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(function (res) {
      param.callback(res)
    })
  }
}