function orderFood(callback){
    console.log("Menu selected")
    setTimeout(() => {
        callback()
    }, 3000);
    
}


function prepareFood(preparation){
    console.log("Chef prepares")
    setTimeout(() => {
        preparation()
    }, 2000);
    
}


function deliverdFood(){
    console.log("Delivered to table")
}

orderFood(() => {
    prepareFood(() => {
        deliverdFood();
    });
});