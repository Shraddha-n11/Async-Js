var cl = console.log 
//flow = hr call - first Interview - second interview - final round
// setTimeout = API call mock 

function SnackBar(msg, icon){
    Swal.fire ({
        title:msg,
        icon:icon,
        timer:3000
    })
}

function hrCall(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success= Math.random() >= .5;
            if(success){
                let msg= `You are selected for 1st round!!`;
                resolve(msg)
            }else{
                let err= `looking for new candidate!!`
                reject (err)
            }
        }, 900)
    });
}

function FirstInterview(){
    return new Promise((resolve, reject) => {
      setTimeout (() => {
        let success= Math.random() >= .5;
        if(success){
            let msg= `You are selected for second!!`;
            resolve(msg)
        }else{
            let err = `Better luck for next time!!`;
            reject(err)
        }
      }, 900)
    });
}

function SecondInterview(){
    return new Promise((resolve, reject) => {
      setTimeout (() => {
        let success= Math.random() >= .5;
        if(success){
            let msg= `You are selected for final!!`;
            resolve(msg)
        }else{
            let err = `Candidate is poor in basics!!`;
            reject(err)
        }
      }, 900)
    });
}

function FinalInterview(){
    return new Promise((resolve, reject) => {
      setTimeout (() => {
        let success= Math.random() >= .5;
        if(success){
            let msg= `You are selected!!`;
            resolve(msg)
        }else{
            let err = `Better Luck Next Time!!`;
            reject(err)
        }
      }, 900)
    });
}


hrCall().then((msg) => {
    cl(msg);
    SnackBar(msg, `success`)
    return FirstInterview();
})

.then((res) =>{
    cl(res);
    SnackBar(msg, `success`)
    return SecondInterview();
})

.then((res) =>{
    cl(res);
    SnackBar(msg, `success`)
    return FinalInterview();
})

.then((res) =>{
    cl(res);
})


.catch((err) =>{
    cl(err);
    SnackBar(err, `error`)
})
