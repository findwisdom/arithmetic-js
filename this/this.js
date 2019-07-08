obj = {
  a: '123',
  b: () => {
    console.log(this)
  }
}

obj.b()
// let x = obj.b
// x()
