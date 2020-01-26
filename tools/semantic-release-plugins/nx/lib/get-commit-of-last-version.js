const child = require('child_process');

module.exports = function runNxAffected(target, options, context) {
  const { logger } = context;

  console.log(options);
  console.log(context);
  const command = `git rev-list -n 1 $TAG`;

  child.execSync(command, {
    stdio: "inherit"
  });
};
