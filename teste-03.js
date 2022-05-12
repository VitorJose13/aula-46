let x;
x = 12

try{

    if(x <= 10){
        console.log("Número aceito")
    }else{
        throw "Erro! Número não aceito"
    }

}catch(erro){
    console.log(erro)
}