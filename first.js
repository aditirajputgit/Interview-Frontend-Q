//First Question
/* 
    there are two string a="abcdef" and b = "123" 
    make a function to get the answer "a1b2c3def"
*/
console.log("Checking working or not")
function newString(a,b){
    let c = a[0];
    for(let i = 0;i<a.length && i <b.length;i++){
        if(i !== 0){
            c += a[i] + b[i]
        }
        else{
            c = b[i];
        }
    }
    
}

function tryingAgain(a,b){
    let i = 0,j = 0 ,c=a[0];
    while(i < a.length && i < b.length){
        for(i; i<a.length&&i<b.length;i++){
             if (i !== 0) {
               c += a[i] + b[i];
             } else {
               c += b[i];
             }
        }
        while(i<a.length){
            c += a[i];
            i++;
        }
        while(i<b.length){
            c += b[i];
            i++;
        }    }
        console.log(c);
}

let a = "abcdef";
let b = "123";
tryingAgain(a, b);
