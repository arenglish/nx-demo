const child = require('child_process');
const lastVersionCommit = require('./get-commit-of-last-version');

module.exports = function runNxAffected(target, options, context) {
    const { logger } = context;

    const baseCommit = lastVersionCommit(options, context);
    const command = `nx affected:${target}`;

    logger.log(`Running nx:affected on target ${target}`);

    child.execSync(command, {
        stdio: "inherit"
    });
};
