const db = require('../../knexfile.js')


/**
 * Inserir um aviso no banco de dados
 * @param {object} aviso O aviso deve ser no seguinte formato:
 * { titulo: <string>, data: <date>, mensagem: <string>}
 * @returns {object} Mensagem de sucesso ou de erro para o usuário 
 */

function salvar(aviso){
    
    return db.insert(aviso).into('avisos')
     .then( _ =>{
         return {tipo:"Sucesso!", corpo:"Aviso cadastrado com sucesso!"}
     })
     .catch(err =>{
         return {tipo:"erro", corpo:"Erro:" + erro}
     })
} //Fim da função salvar 


/**
 * Seleciona todos os avisos cadastrados
 * @returns {object} Objeto com todos os avisos cadrastados ou com uma mensagem de erro
 */
//Se tudo der certo
function selecionarTodos(aviso){
    return db.select('*').from('avisos')
    .then(avisos =>{ return avisos })

//Se der erro
    .catch(err =>{
        return {tipo:"erro", corpo:"Erro:" + erro}
    })

} //Fim do selecionarTodos

/**
 * Função que exclui um aviso do banco de dados
 * @param {int} id id do aviso
 */
function excluir(id){
   return db.del().from('avisos').where('ID_avisos',id) 
}


//Exportar o salvar, o selecionar todos e o excluir
module.exports = {salvar, selecionarTodos, excluir}


