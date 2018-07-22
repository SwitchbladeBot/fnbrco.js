/**
 * Represents a price icon type.
 *
 * Available properties:
 * - `VBUCKS`
 * - `VBOOK`
 * - `VIP`
 * - `FIP`
 *
 * @readonly
 * @enum {string}
 */
class PriceIconType {
  VBUCKS: 'vbucks',
  EMOTE: 'vbook',
  GLIDER: 'vip',
  EMOJI: 'fip'
}

module.exports = PriceIconType