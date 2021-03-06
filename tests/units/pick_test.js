export const pickTest = (pick) => {
  it(`测试使用${pick.name}选择对象{ a: "1", b: 2 }中的a组成新对象{ a: "1" }`, () => {
    const obj = { a: '1', b: 2 }
    const expectObj = { a: '1' }
    // 选中多个属性用数组
    const newObj1 = pick(obj, ['a'])
    // 1个属性可用字符串
    const newObj2 = pick(obj, 'a')
    // 能过滤不存在的属性
    const newObj3 = pick(obj, ['a', 'c'])

    expect(newObj1).toEqual(expectObj)
    expect(newObj2).toEqual(expectObj)
    expect(newObj3).toEqual(expectObj)
  })
}
