module.exports = {
  // https://github.com/stylelint/stylelint-config-standard/blob/master/index.js
  extends: "stylelint-config-standard",
  rules: {
    // always be whitespace before the commas in multi-line selector lists
    "selector-list-comma-newline-before": "always-multi-line",
    // never be a newline after the commas in multi-line selector lists
    "selector-list-comma-newline-after": "never-multi-line",
    // always be a single space after the commas in single-line selector lists
    "selector-list-comma-space-after": "always-single-line"
  }
};
