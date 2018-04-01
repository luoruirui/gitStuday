/*console.log(global);
console.time("a");
for (var i = 0; i <10000 ; i++) {
    var obj = [i];

}
console.timeEnd("a")*/
/*
setTimeout(function () {
    console.log(1);
})*/

/*function sum() {
    var total=0;
    for (var i = 0; i < arguments.length; i++) {
        if(arguments[i]!==NaN){
            total+=arguments[i]
        }
    }
    return total
}*/
//...扩展运算符 把数组的每一项拿过来
/*let a=[2, 1, 2, 5];
let d=[2, 1, 2, 5];*/
//合并数组
/*console.log(...a,...d);

let c=({...{name:'zff'},...{age:'9'}});//es7语法*/
//es6
/*
function sum(...arg) {//剩余运算符
   let tatle= arg.reduce((prev,next)=>{
       //console.log(prev+next);

       return prev+next
   });
   // console.log(tatle);
    return tatle
}
console.log(sum(1,2,3,3));
*/
//类数组转换为数组
// for
// slice.call(arguments)
// Array.form
// es6 function(...arg){}


/*console.log(a instanceof Array);*/
//typeof 检测基本数据类型 和引用类型但是null 会是“object”
//constructor ：当前类型的构造函数 a .constructor ===Array
// object.prototype.toString.call() "[object String]"
/*exports.sum=sum;*/
