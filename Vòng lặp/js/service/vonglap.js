function showLog(message, n) {
 for (var i = 0; i < n; i++) {
    //  document.write(message);
     console.log(message);
 }  
}

// function sum(amount) {
    // for (var i = 1; i <= amount; i++) {
        // 
        // 
    // }
// 
// }

function sum(amount){

    var sum = 0;
    for (var i = 1 ; i <= amount ; i++) { 
        sum = sum + i;
    }  
    return sum ;  
}   
