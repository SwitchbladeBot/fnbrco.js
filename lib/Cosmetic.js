class Cosmetic {
  /**
   * Represents a fnbr.co Cosmetic
   * @param {Object} data - Cosmetic data returned from the API
   */
  constructor (data) {
    /**
     * ID of the Cosmetic
     * @type String
     */
    this.id = data.id

    /**
     * Name of the Cosmetic
     * @type String
     */
    this.name = data.name

    /**
     * Price of the Cosmetic
     * @type String
     */
    this.price = data.price

    /**
     * Icon type for the "currency" the price is in
     * @type PriceIconType
     */
    this.priceIcon = data.priceIcon

    /**
     * URL for the icon of the "currency" the price is in
     * @type String
     */
    this.priceIconLink = data.priceIconLink

    /**
     * URL for the icon of the small (50px) "currency" the price is in
     * @type String
     */
    this.priceIconLink50 = data.priceIconLink.replace('.png', '_50x.png')

    /**
     * @typedef {Object} CosmeticImages
     * @property {String} [icon]
     * @property {String} [png]
     * @property {String} [gallery]
     * @property {String} [featured]
     */

    /**
     * Object containing the links to the Cosmetic's images
     * @type CosmeticImages
     */
    this.images = data.images

    /**
     * The rarity of the cosmetic
     * @type Rarity
     */
    this.rarity = data.rarity

    /**
     * The type of the cosmetic
     * @type CosmeticType
     */
    this.type = data.type

    /**
     * Human-readable string corresponding to the type of the cosmetic
     * @type String
     */
    this.readableType = data.readableType
  }
}

module.exports = Cosmetic
