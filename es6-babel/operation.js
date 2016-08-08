function plus(a){
  console.log('plus a:'+a);
  return ++a;
}
function muti(a){
  console.log('muti a:'+a);
  return a*a;
}
export {plus, muti}
export default {
  plus,
  muti
}
