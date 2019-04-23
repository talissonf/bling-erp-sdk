'use strict'
const rq = require('request')
const ProdutoLoja = require('./produto-loja')
const Produtos = require('./produtos')
const Categorias = require('./categorias')
const CategoriasLoja = require('./categorias-loja')
const Pedidos = require('./pedidos')
class Bling {
  constructor(...args) {
    this.apiPath = 'https://bling.com.br/Api/v2/'
    this.apiKey = args[0].apiKey
    this.lojaId = args[0].lojaId

    //
    this.produtos = new Produtos(this)
    this.produtos.loja = new ProdutoLoja(this)
    this.categorias = new Categorias(this)
    this.categorias.loja = new CategoriasLoja(this)
    this.pedidos = new Pedidos(this)
  }

  request(options) {
    return new Promise((resolve, reject) => {
      rq(options, (erro, response, body) => {
        if (erro || response.statusCode >= 400) {
          //console.log(response.body)
          reject(new Error(body))
        }
        let parse = JSON.parse(body)
        if (parse.retorno.erros) {
          reject(new Error(body))
        }
        resolve(body)
      })
    })
  }
}

module.exports = Bling
module.exports.config = config => {
  return new Bling(config)
}
