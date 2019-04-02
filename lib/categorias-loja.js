'use strict'
const querystring = require('querystring')
const { toXML } = require('jstoxml')

module.exports = class CategoriasLoja {
  constructor(client) {
    this.bling = client
  }

  async add(produtoBody, lojaId = null) {
    let data = toXML(produtoBody)
    let lojId = lojaId || this.bling.lojaId
    if (!lojId) {
      throw new Error('Id da loja não informada')
    }
    let options = {
      method: 'POST',
      uri: this.bling.apiPath + 'categoriasLoja/' + lojId + '/json',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: querystring.stringify({
        'apikey': this.bling.apiKey,
        'xml': data
      })
    }
    return this.bling.request(options)
  }

  async getAll(lojaId = null) {
    let lojId = lojaId || this.bling.lojaId
    if (!lojId) {
      throw new Error('Id da loja não informada')
    }
    let options = {
      method: 'GET',
      uri: this.bling.apiPath + 'categoriasLoja/' + lojId + '/json',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: querystring.stringify({
        'apikey': this.bling.apiKey
      })
    }
    return this.bling.request(options)
  }

  async getById(categoriaId, lojaId = null) {
    let lojId = lojaId || this.bling.lojaId
    if (!lojId) {
      throw new Error('Id da loja não informada')
    }
    let options = {
      method: 'GET',
      uri: this.bling.apiPath + 'categoriasLoja/' + lojId + '/' + categoriaId + '/json',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: querystring.stringify({
        'apikey': this.bling.apiKey
      })
    }
    return this.bling.request(options)
  }
}
