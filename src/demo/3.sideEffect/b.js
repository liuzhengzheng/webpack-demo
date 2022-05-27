export function b(p) {
  console.log("我是b, 函数内部");
  return p;
}
console.log("我是b, 我有副作用");
window.foo = "foo";
