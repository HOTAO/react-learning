import Mock from "mockjs"

// let Random = Mock.Random

const majors = [
  '艺术/设计',
  '编程',
  '宣传',
  '超牛逼'
]

Mock.mock('/api/user', {
  'name': '@cname',
  'major|1': majors,
  'avatar': "@image('40x40')"
})
