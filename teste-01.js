let a = 0;
let b = 1;

//tenta executar o bloco de código
try{

    // variável "c" não existe
    console.log(a + c)

//captura o erro
}catch(e){
    //e: parâmetro com um objeto do tipo Erro
    console.log("Erro:" + e)
}
