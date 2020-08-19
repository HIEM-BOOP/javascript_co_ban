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

function tong(from, to){

    var tong = 0;

    for(var i = from; i < to; i++){
        tong += i;
    }
    return tong ;
}

function sumOdd(from, to){
    var sumOdd = 0 ;
    
    for(var i = from; i < to; i++){
        if(i % 2 !== 0){
            sumOdd += i ;
        }
    }
    return sumOdd;
}

function listOdds(amount){
    var sum = [];
    var dem = 0 ;
    for(var i = 1; i <= amount; i++){
        if(i % 2 !== 0){
            sum.push(i);
            dem++;          
        }
    }
    return sum;
}

function listOdd(from,amount){
    var dem =  1;
    var list = [];
    for(from; dem <= amount; from++){
        if(from % 2 !== 0);
            list.push(from);    
            dem ++;
    }
    return list;
}





