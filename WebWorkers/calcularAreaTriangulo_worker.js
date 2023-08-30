/*self.addEventListener("message",function(event){
    const inputNumber = event.data;
    const areaTriangulo = inputNumber * inputNumber;
    self.postMessage(areaTriangulo);
});*/



addEventListener('message',function(event){
    const sides = event.data;
    const base = sides.base;
    const height = sides.height;
    const areaTriangulo = (base * height) / 2;
    self.postMessage(areaTriangulo);
})