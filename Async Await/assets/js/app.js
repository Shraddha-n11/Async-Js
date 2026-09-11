var cl= console.log;

//Async Await: It is a synthetic sugar coating of promises. 
// It is used to handle the async function.
//async  keywords used to make a function asynchronous.
//We can use await keyword only inside in async function.
//try and catch use to consume the promise and handle the error.
//When promise resolve it will go in try block and if it rejects it will go in catch block.

//Login Flow => user submit form => login successfully done => redirect to dashboard 

function snakBar(msg,icon){
    Swal.fire({
        title:msg,
        icon:icon,
    })
}

function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let success= Math.random() >=.5;       
            if(success){
                let data="login Successfully!!"
                resolve(data);
            }else{
                let err="Something went Wrong??"
                reject(err)
            }
        },1500);
    })
} 

function redirect(){
return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let success=Math.random() >=.5;       
            if(success){
                let data="Data Featch Successfully!!"
                resolve(data);
            }else{
                let err="Something went Wrong While Fetching Data??"
                reject(err)
            }
        },1500);
    })
} 

async function init(){
    try{
        let data=await login();
        cl(data)
        let res=await redirect();
        cl(res);
    }catch(err){
        cl(err);
        snakBar(err,"error")
    }
}
init();