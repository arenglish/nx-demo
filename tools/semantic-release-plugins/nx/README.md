# nx-semantic-release

[**semantic-release**](https://github.com/semantic-release/semantic-release) plugin to
prepare workspace apps using nx's affected:<target> tool.

[![CircleCI](https://circleci.com/gh/arenglish/nx-semantic-release/tree/master.svg?style=svg)](https://circleci.com/gh/arenglish/nx-semantic-release/tree/master)

[![npm latest version](https://img.shields.io/npm/v/nx-semantic-release/latest.svg)](https://www.npmjs.com/package/nx-semantic-release)

| Step               | Description                                                                                                                                                                                                                              |
|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `prepare`          | Run nx affected over desired targets before publishing.                                                                                                                        |

## Install

```bash
$ npm install nx-semantic-release -D
```

## Usage

The plugin can be configured in the [**semantic-release** configuration file](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration):

```json
{
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "nx-semantic-release"
  ]
}
```

### Options

| Option                | Description                                                                                                                                                                                            | Default                                                                                                                                              |
|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| `targets`                | An array of targets to run nx affected:<target> against.                                                                                                                                            | []                                                                                                     |
| `customCommands`        | Additional commands to run on affected app (command will be passed an $app variable)                                                                                                                 | []                                                                                                     |
