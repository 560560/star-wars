export const getPageId = (url: string): number =>
  parseInt(url.replace(/[^\d]/g, ''))
