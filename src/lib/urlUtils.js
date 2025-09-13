// Utility functions for generating SEO-friendly URLs

/**
 * Generate subcategory URL
 * @param {string} subcategorySlug - The subcategory slug
 * @returns {string} - The SEO-friendly subcategory URL
 */
export function generateSubcategoryUrl(subcategorySlug) {
  return `https://intentwire.com/${subcategorySlug}`;
}

/**
 * Generate company URL
 * @param {string} subcategorySlug - The subcategory slug
 * @param {string} companySlug - The company slug
 * @returns {string} - The SEO-friendly company URL
 */
export function generateCompanyUrl(subcategorySlug, companySlug) {
  return `https://intentwire.com/${subcategorySlug}/${companySlug}`;
}

/**
 * Generate relative subcategory URL (for internal links)
 * @param {string} subcategorySlug - The subcategory slug
 * @returns {string} - The relative subcategory URL
 */
export function generateRelativeSubcategoryUrl(subcategorySlug) {
  return `/${subcategorySlug}`;
}

/**
 * Generate relative company URL (for internal links)
 * @param {string} subcategorySlug - The subcategory slug
 * @param {string} companySlug - The company slug
 * @returns {string} - The relative company URL
 */
export function generateRelativeCompanyUrl(subcategorySlug, companySlug) {
  return `/${subcategorySlug}/${companySlug}`;
}

/**
 * Extract slugs from old URLs for redirects
 * @param {string} oldUrl - Old URL format
 * @returns {object} - Object with extracted slugs
 */
export function extractSlugsFromOldUrl(oldUrl) {
  const categoryMatch = oldUrl.match(/\/category\/([^\/\?]+)/);
  const companyMatch = oldUrl.match(/\/company\/([^\/\?]+)/);
  
  return {
    subcategorySlug: categoryMatch ? categoryMatch[1] : null,
    companySlug: companyMatch ? companyMatch[1] : null
  };
}

/**
 * Build new URL from company data
 * @param {object} company - Company object with subcategory data
 * @returns {string} - The new SEO-friendly URL
 */
export function buildCompanyUrlFromData(company) {
  if (!company?.subcategory?.slug || !company?.slug) {
    return null;
  }
  return generateCompanyUrl(company.subcategory.slug, company.slug);
}