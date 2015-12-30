Package.describe({
  name: 'fourquet:inspinia-text-field',
  version: '0.0.2',
  summary: 'Blaze text input component to use with the Inspinia Bootstrap Admin Theme',
  git: 'https://github.com/fourquet/meteor-package-inspinia-text-field',
  documentation: 'README.md',
  license: 'LICENSE',
});

const packages = [
  'ecmascript',
  'templating',
];

const clientFiles = [
  'textField.html',
  'textField.js',
];

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(packages);
  api.imply(packages);
  api.addFiles(clientFiles, 'client');
});
