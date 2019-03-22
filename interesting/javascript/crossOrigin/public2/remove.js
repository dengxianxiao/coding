function removeHandler(data) {
  console.log('调用远程方法成功：data.result: ', data.result)
}

// 一般由服务端语言动态生成，现在模拟测试直接写客户端方法
localHandler({
  "id": "a2",
  "result": "a1 result"
})