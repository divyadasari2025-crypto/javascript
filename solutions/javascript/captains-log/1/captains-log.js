// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  const ranNum = Math.round(1000+Math.random()*(9999-1000+1));
  return `NCC-${ranNum}`;
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  return 41000+Math.random()*(42000-41000);
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  const letters = ['D','H','J','K','L','M','N','R','T','Y'];
  return letters[Math.floor(Math.random()*(letters.length))];
}
