function sanitizeXSS(string) {
  return string.replaceAll('<' )
}