/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: 'next',
  // The rest of your configuration...
  overrides: [
    {
      files: ["app/**/*.tsx", "app/**/*.jsx"],
      rules: {
        // Warn on any <style> usage; hard fail still enforced by guard script
        "no-restricted-syntax": [
          "warn",
          {
            selector: "JSXOpeningElement[name.name='style']",
            message: "Inline <style> detected. Use CSS Modules or Tailwind."
          }
        ]
      }
    }
  ]
};
