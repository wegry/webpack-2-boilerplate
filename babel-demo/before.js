export const foo = {
  bar (baz) {
    const format = x => x.toLocaleString()

    const numbers = [
      2001,
      9001
    ]

    numbers
      .map(format)
      .forEach(x => console.log(x))
  }
}
