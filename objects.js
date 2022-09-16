const batch1 ={
    name:"vinay",age:23,course:"MERN",location:"HYD"
}
const batch2 ={
    name:"dinesh",age:23,course:"fullstack",location:"WGL"
}

const emp ={...batch2,batch1};
console.log(emp)