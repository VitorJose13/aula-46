const cpf = "00000000000"

try {

    if(cpf.length != 11){
        throw{
            "name": "CPFTamanhoInválido",
            "message": "O tamanho do CPF é inválido"
        }
    } else{
        console.log ("Tamanho do CPF é válido")
    }
} catch(error) {
    console.log(error.message)
}