const child = require('child_process');

module.exports = function runNxAffected(target, options, context) {
    const { logger } = context;

    const command = `nx affected:${target}`;

    logger.log(`Running nx:affected on target ${target}`);

    child.execSync(command, {
        stdio: "inherit"
    });
};
