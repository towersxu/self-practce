import {clone,merge} from 'lodash'

let user = {
  name:'xutao',
  friends:['amy','anyi','hebi']
}
let age = {
  birthday:'2016年08月08日15:44:15'
}
let newUser = clone(user);
let oldUser = merge(user,age);
console.log(newUser.name);
console.log(oldUser);
