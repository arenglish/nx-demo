const child = require('child_process');
const fs = require('fs');
const rootPackage = require('../package');

if (process.argv.length === 2) {
  console.error('Expected at leat 2 args!');
  process.exit(1);
}

const app = process.argv[2];
const version = process.argv[3];

const angularJSON = require(__dirname + '/../angular.json');
const project = angularJSON.projects[app];
if (!project) {
  console.error(`Could not find project ${app}!`);
  process.exit(1);
}

const distPath = __dirname + '/../' + project.architect.build.options.outputPath;
process.chdir(distPath);

const package = {
  name: rootPackage.name.replace('nx-demo', 'demo-' + app),
  version: version,
  license: "MIT"
}

fs.writeFileSync('package.json', JSON.stringify(package), { encoding: 'utf-8'});

child.execSync('npm pack', { stdio: 'inherit' });
// child.execSync('npm publish --access public', { stdio: 'inherit' });


