// 引入mockjs
import Mock from 'mockjs'
// 使用mockjs模拟数据
Mock.mock('http://test/mock', () => {
  const token = {'token': Mock.Random.string()}
  return token
})
