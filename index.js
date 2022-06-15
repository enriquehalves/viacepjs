async function buscaCep(){
    const cep = document.getElementById('cep').value.replace(/\D/g,'')

    /*const $cep //variavel com cifrão não precisa passar entre chaves mas precisa concatenar 
    const url = 'http://viacep.com.br/ws/'+$cep+'/json'*/

    const url = `http://viacep.com.br/ws/${cep}/json`

    

    const endereco = await fetch(url)
    const local = await endereco.json()
 
    document.getElementById('logradouro').value = local['logradouro']
    document.getElementById('bairro').value = local['bairro']
    document.getElementById('localidade').value = local['localidade']
    document.getElementById('ddd').value = local['ddd']
}

function limpar(){
    document.getElementById('cep').value = ''
}