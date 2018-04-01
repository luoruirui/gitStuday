let sum =require('./1.js');
console.log(sum.sum(1111));
function Dialog() {
    this.title=function () {
        console.log("弹出框");
    }
}
Dialog.title='输入'
Dialog.prototype.show=function () {
    console.log("显示");
};
Dialog.prototype.show=function () {
    console.log("隐藏");
};
Dialog.prototype.show=function () {
    console.log("显示");
};
new Dialog();
