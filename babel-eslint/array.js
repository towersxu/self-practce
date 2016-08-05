
function addAll () {
  var c = 1000;
  console.log(c);
  return Array.from(arguments).reduce((a,b)=>a+b);
}
export {
  addAll
}
