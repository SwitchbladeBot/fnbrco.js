/* eslint-disable no-unused-vars */

const snekfetch = require('snekfetch')
const CosmeticType = require('./CosmeticType.js')
const Cosmetic = require('./Cosmetic.js')

class Client {
  /**
   *
   * @param {String} key - Your fnbrco.js API key
   * @param {String} [baseUrl] - Base URL for the API. I don't know, maybe you're using some kind of proxy?
   */
  constructor (key, baseUrl = 'https://fnbr.co/api') {
    this.key = key
    this.baseUrl = baseUrl
  }

  /**
   * Performs a GET request with the Client's API key
   * @param {String} url - The URL to perform the request to
   * @returns {Promise} - Snekfetch promise
   */
  get (url) {
    return snekfetch.get(url, { headers: { 'x-api-key': this.key } })
  }

  /**
   * Find the image urls for a cosmetic using the name as a search term
   * @param {String} name - Name of the cosmetic (case sensitive)
   * @param {Number} [limit = 1] - Limits the number of items in the response. Must be an integer between 1 and 15.
   * @param {CosmeticType} [type] - Filters the response by Cosmetic Type.
   * @returns {Array<Cosmetic>}
   */
  async getImages (name, limit = 1, type) {
    const { body } = await this.get(`${this.baseUrl}/images?search=${encodeURIComponent(name)}`)
    return body.data.map(c => new Cosmetic(c))
  }

  /**
   * @typedef {Object} ShopRotation
   * @property {Array<Cosmetic>} featured
   * @property {Array<Cosmetic>} daily
   */

  /**
   * Gets the current shop rotation
   * @returns {ShopRotation}
   */
  async getShop () {
    const { body } = await this.get(`${this.baseUrl}/shop`)
    return { featured: body.data.featured, daily: body.data.daily }
  }
}

module.exports = Client

/* eslint-disable no-unused-vars */
